import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    Name = null;
    Musician = null;

    constructor(private app: AppComponent) { }

    ngOnInit() {
        console.log(this.app.loggedInUser);
        if (this.app.loggedInUser.Musician != null) {
            this.Musician = this.app.loggedInUser.Musician;
            if (this.Musician.Name == this.app.loggedInUser.Name) {
                this.Name = this.Musician.Name;
            }
            else {
                this.Name = `this.Musician.Name (${this.app.loggedInUser.Name})`;
            }
        }
        else {
            this.Name = this.app.loggedInUser.Name;
        }
    }

}
