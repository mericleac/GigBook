import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user = {
        Name: null,
        Email: null,
        Password: null,
        ConfirmPassword: null
    }
    errors = {};

    constructor(private _httpService: HttpService, private router: Router, private app: AppComponent) { }

    ngOnInit() {
    }

    Register() {
        let observable = this._httpService.registerUser(this.user);
        observable.subscribe((data) => {
            console.log(data);
            // this.app.getUser();
            this.router.navigate(["/"]);
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
