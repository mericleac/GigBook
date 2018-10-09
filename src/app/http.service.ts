import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) { }

    // user routes
    loginUser(user) {
        console.log("In service");
        return this._http.post("/users/Login", user);
    }

    registerUser(user) {
        return this._http.post("/users", user);
    }

    getLoggedInUser() {
        return this._http.get("/users/loggedIn");
    }

    addMusician(musician) {
        return this._http.post("/musicians", musician);
    }

    getMusicianById(id) {
        return this._http.get("/musicians/" + id);
    }

    getAllMusicians() {
        return this._http.get("/musicians");
    }

    filterMusicians(filter) {
        return this._http.post("/musicians/filter", filter);
    }

    updateMusician(musician) {
        return this._http.put("/musicians", musician);
    }

    addGig(id, gig) {
        console.log(id, gig, "Here");
        return this._http.post("/gigs/" + id, gig);
    }

    updateGig(gig) {
        return this._http.post("/gigs/update", gig);
    }

    gigById(id) {
        return this._http.get("/gigs/" + id);
    }

    getMyGigs() {
        return this._http.get("/gigs");
    }

    approvePayment(id) {
        return this._http.get("/gigs/payment/" + id);
    }

    deleteMusician() {
        return this._http.get("/musicians/delete");
    }
}
