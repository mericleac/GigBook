import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    name = null;
    user = null;
    currUser = {};

    constructor(private app: AppComponent, private router: Router, private _httpService: HttpService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.currUser = this.app.loggedInUser;
        if (this.currUser == null) {
            this.currUser = {};
            this.currUser['id'] = 0;
        }
        this._route.params.subscribe((params: Params) => {
            if (params['id']) {
                let observable = this._httpService.getMusicianById(params['id']);
                observable.subscribe(data => {
                    this.user = data;
                    this.name = data['musicianName'];
                    console.log(this.user);
                });
            }
            else {
                console.log(this.app.loggedInUser);
                if (this.app.loggedInUser !== null) {
                    this.user = this.app.loggedInUser;
                    if (this.user.role != "Musician" || this.user.name == this.user.musicianName) {
                        this.name = this.user.name;
                    }
                    else {
                        this.name = `${this.user.musicianName} (${this.user.name})`;
                    }
                }
                else {
                    this.router.navigate(["/login"]);
                }
            }
        });
    }

    deleteMusician() {
        let observable = this._httpService.deleteMusician();
        observable.subscribe(data => {
            this.app.loggedInUser = data;
            this.router.navigate(["/"]);
        })
    }
}
