import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

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
}
