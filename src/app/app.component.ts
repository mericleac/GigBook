import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'main';
    loggedInUser = null;

    constructor(private _httpService: HttpService) {
    }

    getUser() {
        let observable = this._httpService.getLoggedInUser();
        observable.subscribe((data) => {
            this.loggedInUser = data;
            if (data['musicianId'] != null) {
                let observable = this._httpService.getMusicianById(data['musicianId']);
                observable.subscribe((data) => {
                    this.loggedInUser['musician'] = data;
                });
            };
        });
    };
}
