import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    Name = null;
    title = 'main';
    loggedInUser = null;

    constructor(private _httpService: HttpService, private router: Router) {
    }

    getUser() {
        let observable = this._httpService.getLoggedInUser();
        observable.subscribe((data) => {
            this.loggedInUser = data;
            return data;
        });
    };

    filterMusicians() {
        console.log(this.Name);
        this.router.navigate(["/musicians", this.Name]);
    }
}
