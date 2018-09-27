import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-musician-form',
    templateUrl: './musician-form.component.html',
    styleUrls: ['./musician-form.component.css']
})
export class MusicianFormComponent implements OnInit {
    ImageUrl = "http://www.epsomps.vic.edu.au/wp-content/uploads/2016/09/512x512-1-300x300.png";
    Musician = {
        Name: null,
        Summary: null,
        Location: null,
        ImageUrl: null,
        Instruments: []
    }
    Instrument = {
        Name: null,
        Family: null,
        YearsExperience: null
    }
    urlReg = /()\w+(\.)+(jpg|png|jpeg|JPG|JPEG|PNG)/;
    urlMessage = null;
    errors = {};

    constructor(private _httpService: HttpService, private router: Router, private app: AppComponent) { }

    ngOnInit() {
        this.Musician.Name = this.app.loggedInUser.name;
    }

    UpdateImage(event) {
        console.log("HERE!");
        if (this.urlReg.test(this.Musician.ImageUrl)) {
            console.log("Good");
            console.log(event)
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.ImageUrl = event.target['result'];
                this.Musician.ImageUrl = event.target['result'];
            }
        }
        else {
            console.log("Invalid");
            this.errors['Image'] = "Not a valid image file.";
        }
    }

    AddInstrument() {
        this.Musician.Instruments.push(this.Instrument);
        this.Instrument = {
            Name: null,
            Family: null,
            YearsExperience: null
        };
    }

    DeleteInstrument(data) {
        for (let i = 0; i < this.Musician.Instruments.length; i++) {
            if (this.Musician.Instruments[i] === data) {
                this.Musician.Instruments.splice(i, 1);
            }
        }
    }

    AddMusician() {
        let observable = this._httpService.addMusician(this.Musician);
        observable.subscribe((data) => {
            console.log(data);
            if (data['id'] != null) {
                this.app.loggedInUser = data;
                this.router.navigate(["/profile"]);
            }
        },
        (err) => {
            console.log(err['error']);
            let errors = Object.keys(err['error']);
            for (let i = 0; i < errors.length; i++) {
                this.errors[errors[i]] = err['error'][errors[i]][0];
            }; 
        })
    }
}
