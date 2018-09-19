import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login = {
        Email: null,
        Password: null
    };
    errors = {};

    constructor(private _httpService: HttpService, private router: Router, private app: AppComponent) {
    }

    ngOnInit() {
    }

    Login() {
        console.log(this.login);
        let observable = this._httpService.loginUser(this.login);
        observable
            .subscribe((data) => {
                console.log(data);
                console.log("HERE!!!!!");
                if (data["userId"] != null) {
                    this.app.loggedInUser = data;
                    this.router.navigate([""]);
                }
            },
            (err) => {
                console.log(err['error']);
                let errors = Object.keys(err['error']);
                for (let i = 0; i < errors.length; i++) {
                    this.errors[errors[i]] = err['error'][errors[i]][0];
                };
                console.log(this.errors);
            });
    }
}
