import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-musician-list',
    templateUrl: './musician-list.component.html',
    styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent implements OnInit {
    Musicians: any;
    Filter = {
        location: null,
        instruments: [],
        years: 1
    }

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getAllMusicians();
    }

    getAllMusicians() {
        let observable = this._httpService.getAllMusicians();
        observable.subscribe(data => {
            this.Musicians = data;
        })
    }

}
