import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-gig-request',
    templateUrl: './gig-request.component.html',
    styleUrls: ['./gig-request.component.css']
})
export class GigRequestComponent implements OnInit {
    user = null;
    musician = null;
    Address = {
        Street: null,
        City: null,
        State: null,
        Zip: null
    }
    Date = null
    StartTime = null
    EndTime = null
    Gig: any;
    errors = {};
    action = "New";

    constructor(private _httpService: HttpService, private _route: ActivatedRoute, private router: Router, private app: AppComponent) { }

    ngOnInit() {
        this.user = this.app.loggedInUser;
        if (this.user == null) {
            this.router.navigate(['login']);
        }
        this._route.params.subscribe((params: Params) => {
            if (params['gigId']) {
                console.log(params['gigId']);
                parseInt(params['gigId']);
                let observable = this._httpService.gigById(params['gigId']);
                observable.subscribe(data => {
                    this.Gig = data;
                    console.log(this.Gig);
                    if (this.Gig.musicianId == this.user.id) {
                        this.action = "Musician Update";
                    }
                    else {
                        this.action = "Client Update";
                    }
                    console.log(this.action);
                    this.musician = data['musician'];
                    this.Date = this.formatDate(data['startTime']);
                    this.StartTime = this.formatTime(data['startTime']);
                    this.EndTime = this.formatTime(data['endTime']);
                });
            }
            else {
                let observable = this._httpService.getMusicianById(params['id']);
                observable.subscribe(data => {
                    this.musician = data;
                    console.log(this.musician);
                });
                this.Gig = {
                    address: null,
                    startTime: null,
                    endTime: null,
                    amount: null
                }
            }
        });
    }

    newGig() {
        if (this.action != "New") {
            this.updateGig();
            return;
        }
        console.log("Here");
        this.Gig.address = `${this.Address.Street} ${this.Address.City}, ${this.Address.State} ${this.Address.Zip}`;
        this.Gig.startTime = new Date(this.Date + " " + this.StartTime);
        this.Gig.endTime = new Date(this.Date + " " + this.EndTime);
        console.log(this.Gig.startTime);
        console.log(this.Gig.endTime);
        let observable = this._httpService.addGig(this.musician.id, this.Gig);
        observable.subscribe((data) => {
            console.log(data);
            if (data['gigId'] != null) {
                this.router.navigate(['/gigs']);
            }
        },
        (err) => {
            let errors = Object.keys(err['error']);
            for (let i = 0; i < errors.length; i++) {
                this.errors[errors[i]] = err['error'][errors[i]][0];
            }; 
        })
    }

    updateGig() {
        let observable = this._httpService.updateGig(this.Gig);
        observable.subscribe(data => {
            console.log(data);
            this.router.navigate(['/gigs'])
        })
    }

    formatTime(time) {
        var x = new Date(time);
        var h = x.getHours();
        var m = x.getMinutes();
        if (m < 10) {
            var ms = "0" + m;
        }
        else {
            var ms = m.toString();
        }
        if (this.action == "Musician Update") {
            var h = h % 12;
        }
        return h + ":" + ms;
    }

    formatDate(date) {
        var x = new Date(date);
        var y = x.getFullYear();
        var m = x.getMonth();
        var d = x.getDate();
        if (m < 10) {
            var ms = "0" + m;
        }
        else {
            var ms = m.toString();
        }
        if (d < 10) {
            var ds = "0" + d;
        }
        else {
            var ds = d.toString();
        }
        if (this.action != "Musician Update") {
            return y + '-' + ms + '-' + ds;    
        }
        else {
            return ms + '/' + ds + '/' + y;
        }
    }
}
