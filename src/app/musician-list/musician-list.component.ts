import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

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
        years: 1,
        name: null
    }

    constructor(private _httpService: HttpService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.Filter.name = params['name'];
            if (this.Filter.name) {
                this.filterMusicians();
            }
            else {
                this.getAllMusicians();
            }
        });
    }

    getAllMusicians() {
        let observable = this._httpService.getAllMusicians();
        observable.subscribe(data => {
            this.Musicians = data;
        })
    }

    filterMusicians() {
        console.log(this.Filter);
        let observable = this._httpService.filterMusicians(this.Filter);
        observable.subscribe(data => {
            this.Musicians = data;
        })
    }

}
