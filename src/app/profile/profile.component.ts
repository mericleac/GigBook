import { Component, OnInit } from '@angular/core';
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

    constructor(private app: AppComponent, private router: Router) { }

    ngOnInit() {
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

}
