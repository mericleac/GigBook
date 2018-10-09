import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-gig-list',
    templateUrl: './gig-list.component.html',
    styleUrls: ['./gig-list.component.css']
})
export class GigListComponent implements OnInit {
    user = null;
    ClientGigs = [];
    UserRequests = [];

    constructor(private _httpService: HttpService, private router: Router, private app: AppComponent) { }

    ngOnInit() {
        this.user = this.app.loggedInUser;
        this.getGigs();
    }

    getGigs() {
        let observable = this._httpService.getMyGigs();
        observable.subscribe((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (data[i].userId == this.user.id) {
                    this.UserRequests.push(data[i]);
                }
                else if (data[i].musicianId == this.user.id) {
                    this.ClientGigs.push(data[i]);
                }
            }
            console.log(this.ClientGigs);
            console.log(this.UserRequests);
        });
    }

    openCheckout(id) {
        console.log(id);
        var idx = this.UserRequests.findIndex(x => x.gigId == id);
        console.log(idx);
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_3cjD0ijDefj5iXqrVtdEGywR',
            locale: 'auto',
            token: token => {
                console.log(token);
                let observable = this._httpService.approvePayment(this.UserRequests[idx].gigId);
                observable.subscribe(data => {
                    this.UserRequests[idx] = data;
                    console.log(this.UserRequests);
                });
            }
        });

        handler.open({
                name: 'GigBook',
                description: 'Gig payment',
                amount: this.UserRequests[idx].amount * 100
            });
    }

}
