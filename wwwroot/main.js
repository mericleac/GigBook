(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _musician_form_musician_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./musician-form/musician-form.component */ "./src/app/musician-form/musician-form.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _musician_list_musician_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./musician-list/musician-list.component */ "./src/app/musician-list/musician-list.component.ts");
/* harmony import */ var _gig_request_gig_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gig-request/gig-request.component */ "./src/app/gig-request/gig-request.component.ts");
/* harmony import */ var _gig_list_gig_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gig-list/gig-list.component */ "./src/app/gig-list/gig-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: "addMusician", component: _musician_form_musician_form_component__WEBPACK_IMPORTED_MODULE_5__["MusicianFormComponent"] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: "profile/:id", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: "musicians/request/:id", component: _gig_request_gig_request_component__WEBPACK_IMPORTED_MODULE_8__["GigRequestComponent"] },
    { path: "musicians/:name", component: _musician_list_musician_list_component__WEBPACK_IMPORTED_MODULE_7__["MusicianListComponent"] },
    { path: "musicians", component: _musician_list_musician_list_component__WEBPACK_IMPORTED_MODULE_7__["MusicianListComponent"] },
    { path: "gigs", component: _gig_list_gig_list_component__WEBPACK_IMPORTED_MODULE_9__["GigListComponent"] },
    { path: "gig/:gigId", component: _gig_request_gig_request_component__WEBPACK_IMPORTED_MODULE_8__["GigRequestComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background: linear-gradient(#103b48, #446766);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">GigBook</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/musicians']\">Browse Musicians</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/gigs']\">My Gigs</a></li>\n            <li *ngIf=\"loggedInUser === null\" class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">My Profile</a></li>\n            <li *ngIf=\"loggedInUser !== null\" class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">{{ loggedInUser.name }}'s Profile</a></li>\n        </ul>\n        <a *ngIf=\"loggedInUser === null\" class=\"nav-link\" [routerLink]=\"['/login']\">Login/Register</a>\n        <a *ngIf=\"loggedInUser !== null\" class=\"nav-link\" [routerLink]=\"['/addMusician']\">Register as a musician</a>\n        <form class=\"form-inline my-2 my-lg-0\" (submit)=\"filterMusicians()\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Find Musicians\" name=\"Name\" [(ngModel)]=\"Name\">\n            <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.Name = null;
        this.title = 'main';
        this.loggedInUser = null;
    }
    AppComponent.prototype.getUser = function () {
        var _this = this;
        var observable = this._httpService.getLoggedInUser();
        observable.subscribe(function (data) {
            _this.loggedInUser = data;
            return data;
        });
    };
    ;
    AppComponent.prototype.filterMusicians = function () {
        console.log(this.Name);
        this.router.navigate(["/musicians", this.Name]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _musician_form_musician_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./musician-form/musician-form.component */ "./src/app/musician-form/musician-form.component.ts");
/* harmony import */ var _musician_list_musician_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./musician-list/musician-list.component */ "./src/app/musician-list/musician-list.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _gig_request_gig_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gig-request/gig-request.component */ "./src/app/gig-request/gig-request.component.ts");
/* harmony import */ var _gig_list_gig_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gig-list/gig-list.component */ "./src/app/gig-list/gig-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _musician_form_musician_form_component__WEBPACK_IMPORTED_MODULE_11__["MusicianFormComponent"],
                _musician_list_musician_list_component__WEBPACK_IMPORTED_MODULE_12__["MusicianListComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _gig_request_gig_request_component__WEBPACK_IMPORTED_MODULE_14__["GigRequestComponent"],
                _gig_list_gig_list_component__WEBPACK_IMPORTED_MODULE_15__["GigListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gig-list/gig-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/gig-list/gig-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gigs {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 70%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/gig-list/gig-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/gig-list/gig-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigs\">\n    <div *ngIf=\"user.role == 'Musician'\">\n        <h2>Client Requests</h2>\n        <hr class=\"my-4\">\n        <div *ngFor=\"let gig of ClientGigs\" class=\"gig\">\n            <h3>Gig Request for {{gig.musician.musicianName}}</h3>\n            <p>Location: {{gig.address}}</p>\n            <p>Date and Time: {{gig.startTime}}</p>\n            <p>Payment Offer: ${{gig.amount}}</p>\n            <p *ngIf=\"gig.musicianConfirm && gig.userConfirm && gig.transaction\">Status: Confirmed!</p>\n            <p *ngIf=\"gig.musicianConfirm && gig.userConfirm && !gig.transaction\">Status: Transaction needed</p>\n            <div *ngIf=\"!gig.musicianConfirm && gig.userConfirm\">\n                <p>Status: Musician approval needed</p>\n                <a  class=\"btn btn-success\" [routerLink]=\"['/gig', gig.gigId]\">Review and approve</a>\n            </div>\n            <p *ngIf=\"!gig.userConfirm && gig.musicianConfirm\">Status: Client approval needed</p>\n        </div>\n    </div>\n\n    <h2>Your Requests</h2>\n    <hr class=\"my-4\">\n    <p *ngIf=\"UserRequests.length == 0\">You haven't made any requests yet! Click <a [routerLink]=\"['/musicians']\">here</a> to find a musicians.</p>\n    <div *ngFor=\"let gig of UserRequests\" class=\"gig\">\n        <h3>Gig Request for {{gig.musician.musicianName}}</h3>\n        <p>Location: {{gig.address}}</p>\n        <p>Date and Time: {{gig.startTime}}</p>\n        <p>Payment Offer: ${{gig.amount}}</p>\n        <p *ngIf=\"gig.musicianConfirm && gig.userConfirm && gig.transaction\">Status: Confirmed!</p>\n        <p *ngIf=\"!gig.musicianConfirm && gig.userConfirm\">Status: Musician approval needed</p>\n        <div *ngIf=\"!gig.userConfirm && gig.musicianConfirm\">\n            <p>Status: Client approval needed</p>\n            <a class=\"btn btn-success\" [routerLink]=\"['/gig', gig.gigId]\">Review and approve</a>\n        </div>\n        <div *ngIf=\"gig.musicianConfirm && gig.userConfirm && !gig.transaction\">\n            <p>Status: Transaction needed</p>\n            <button class=\"btn btn-success\" (click)=\"openCheckout(gig.gigId)\">Pay now</button>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/gig-list/gig-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/gig-list/gig-list.component.ts ***!
  \************************************************/
/*! exports provided: GigListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigListComponent", function() { return GigListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GigListComponent = /** @class */ (function () {
    function GigListComponent(_httpService, router, app) {
        this._httpService = _httpService;
        this.router = router;
        this.app = app;
        this.user = null;
        this.ClientGigs = [];
        this.UserRequests = [];
    }
    GigListComponent.prototype.ngOnInit = function () {
        this.user = this.app.loggedInUser;
        this.getGigs();
    };
    GigListComponent.prototype.getGigs = function () {
        var _this = this;
        var observable = this._httpService.getMyGigs();
        observable.subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].userId == _this.user.id) {
                    _this.UserRequests.push(data[i]);
                }
                else if (data[i].musicianId == _this.user.id) {
                    _this.ClientGigs.push(data[i]);
                }
            }
            console.log(_this.ClientGigs);
            console.log(_this.UserRequests);
        });
    };
    GigListComponent.prototype.openCheckout = function (id) {
        var _this = this;
        console.log(id);
        var idx = this.UserRequests.findIndex(function (x) { return x.gigId == id; });
        console.log(idx);
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_3cjD0ijDefj5iXqrVtdEGywR',
            locale: 'auto',
            token: function (token) {
                console.log(token);
                var observable = _this._httpService.approvePayment(_this.UserRequests[idx].gigId);
                observable.subscribe(function (data) {
                    _this.UserRequests[idx] = data;
                    console.log(_this.UserRequests);
                });
            }
        });
        handler.open({
            name: 'GigBook',
            description: 'Gig payment',
            amount: this.UserRequests[idx].amount * 100
        });
    };
    GigListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gig-list',
            template: __webpack_require__(/*! ./gig-list.component.html */ "./src/app/gig-list/gig-list.component.html"),
            styles: [__webpack_require__(/*! ./gig-list.component.css */ "./src/app/gig-list/gig-list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], GigListComponent);
    return GigListComponent;
}());



/***/ }),

/***/ "./src/app/gig-request/gig-request.component.css":
/*!*******************************************************!*\
  !*** ./src/app/gig-request/gig-request.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gig-form {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 70%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/gig-request/gig-request.component.html":
/*!********************************************************!*\
  !*** ./src/app/gig-request/gig-request.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-form\">\n    <h2>Gig Request for {{ musician.musicianName }}</h2>\n    <hr class=\"my-4\">\n    <form (submit)=\"newGig()\">\n        <span *ngIf=\"errors.Address\">{{errors.Address}}</span>\n        <h5>Venue Address</h5>\n        <p *ngIf=\"action == 'Musician Update'\">{{Gig.address}}</p>\n        <div *ngIf=\"action != 'Musician Update'\">\n            <div class=\"form-group\">\n                <label>Street</label>\n                <input class=\"form-control\" type=\"text\" name=\"Street\" [(ngModel)]=\"Address.Street\">\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col\">\n                    <label>City</label>\n                    <input class=\"form-control\" type=\"text\" name=\"City\" [(ngModel)]=\"Address.City\">\n                </div>\n                <div class=\"form-group col\">\n                    <label>State</label>\n                    <input class=\"form-control\" type=\"text\" name=\"State\" [(ngModel)]=\"Address.State\">\n                </div>\n                <div class=\"form-group col\">\n                    <label>Zip Code</label>\n                    <input class=\"form-control\" type=\"text\" name=\"Zip\" [(ngModel)]=\"Address.Zip\">\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Date of Performace</label>\n            <input *ngIf=\"action != 'Musician Update'\" class=\"form-control\" type=\"date\" name=\"Date\" [(ngModel)]=\"Date\">\n            <p *ngIf=\"action == 'Musician Update'\">{{ Date }}</p>\n        </div>\n        <div class=\"form-group\">\n            <label>Start Time</label>\n            <input *ngIf=\"action != 'Musician Update'\" class=\"form-control\" type=\"time\" name=\"Time\" [(ngModel)]=\"StartTime\">\n            <p *ngIf=\"action == 'Musician Update'\">{{ StartTime }}</p>\n        </div>\n        <div class=\"form-group\">\n            <label>End Time</label>\n            <input *ngIf=\"action != 'Musician Update'\" class=\"form-control\" type=\"time\" name=\"Time\" [(ngModel)]=\"EndTime\">\n            <p *ngIf=\"action == 'Musician Update'\">{{ EndTime }}</p>\n        </div>\n        <div class=\"form-group\">\n            <label>Payment Offer</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">$</span>\n                </div>\n                <input class=\"form-control\" type=\"text\" name=\"Amount\" [(ngModel)]=\"Gig.amount\">\n            </div>\n            <small *ngIf=\"action != 'Musician Update'\" class=\"form-text text-muted\">This is just an initial offer, the musician will get a chance to negotiate or accept.</small>\n            <small *ngIf=\"action == 'Musician Update'\" class=\"form-text text-muted\">You may increase or decrease the offer, the client will have a chance to negotiate or accept.</small>\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Make Request\">\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/gig-request/gig-request.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gig-request/gig-request.component.ts ***!
  \******************************************************/
/*! exports provided: GigRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigRequestComponent", function() { return GigRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GigRequestComponent = /** @class */ (function () {
    function GigRequestComponent(_httpService, _route, router, app) {
        this._httpService = _httpService;
        this._route = _route;
        this.router = router;
        this.app = app;
        this.user = null;
        this.musician = null;
        this.Address = {
            Street: null,
            City: null,
            State: null,
            Zip: null
        };
        this.Date = null;
        this.StartTime = null;
        this.EndTime = null;
        this.errors = {};
        this.action = "New";
    }
    GigRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.app.loggedInUser;
        if (this.user == null) {
            this.router.navigate(['login']);
        }
        this._route.params.subscribe(function (params) {
            if (params['gigId']) {
                console.log(params['gigId']);
                parseInt(params['gigId']);
                var observable = _this._httpService.gigById(params['gigId']);
                observable.subscribe(function (data) {
                    _this.Gig = data;
                    console.log(_this.Gig);
                    if (_this.Gig.musicianId == _this.user.id) {
                        _this.action = "Musician Update";
                    }
                    else {
                        _this.action = "Client Update";
                    }
                    console.log(_this.action);
                    _this.musician = data['musician'];
                    _this.Date = _this.formatDate(data['startTime']);
                    _this.StartTime = _this.formatTime(data['startTime']);
                    _this.EndTime = _this.formatTime(data['endTime']);
                });
            }
            else {
                var observable = _this._httpService.getMusicianById(params['id']);
                observable.subscribe(function (data) {
                    _this.musician = data;
                    console.log(_this.musician);
                });
                _this.Gig = {
                    address: null,
                    startTime: null,
                    endTime: null,
                    amount: null
                };
            }
        });
    };
    GigRequestComponent.prototype.newGig = function () {
        var _this = this;
        if (this.action != "New") {
            this.updateGig();
            return;
        }
        console.log("Here");
        this.Gig.address = this.Address.Street + " " + this.Address.City + ", " + this.Address.State + " " + this.Address.Zip;
        this.Gig.startTime = new Date(this.Date + " " + this.StartTime);
        this.Gig.endTime = new Date(this.Date + " " + this.EndTime);
        console.log(this.Gig.startTime);
        console.log(this.Gig.endTime);
        var observable = this._httpService.addGig(this.musician.id, this.Gig);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['gigId'] != null) {
                _this.router.navigate(['/gigs']);
            }
        }, function (err) {
            var errors = Object.keys(err['error']);
            for (var i = 0; i < errors.length; i++) {
                _this.errors[errors[i]] = err['error'][errors[i]][0];
            }
            ;
        });
    };
    GigRequestComponent.prototype.updateGig = function () {
        var _this = this;
        var observable = this._httpService.updateGig(this.Gig);
        observable.subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/gigs']);
        });
    };
    GigRequestComponent.prototype.formatTime = function (time) {
        var x = new Date(time);
        var h = x.getHours();
        var m = x.getMinutes();
        if (m < 10) {
            var ms = "0" + m;
        }
        else {
            var ms = m.toString();
        }
        if (this.action == "Musician Update") {
            var h = h % 12;
        }
        return h + ":" + ms;
    };
    GigRequestComponent.prototype.formatDate = function (date) {
        var x = new Date(date);
        var y = x.getFullYear();
        var m = x.getMonth();
        var d = x.getDate();
        if (m < 10) {
            var ms = "0" + m;
        }
        else {
            var ms = m.toString();
        }
        if (d < 10) {
            var ds = "0" + d;
        }
        else {
            var ds = d.toString();
        }
        if (this.action != "Musician Update") {
            return y + '-' + ms + '-' + ds;
        }
        else {
            return ms + '/' + ds + '/' + y;
        }
    };
    GigRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gig-request',
            template: __webpack_require__(/*! ./gig-request.component.html */ "./src/app/gig-request/gig-request.component.html"),
            styles: [__webpack_require__(/*! ./gig-request.component.css */ "./src/app/gig-request/gig-request.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], GigRequestComponent);
    return GigRequestComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 40%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.title {\r\n    width: 50%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: right;\r\n    margin-top: 10%;\r\n}\r\n\r\n.title h1 {\r\n    font-size: 4.5rem;\r\n}\r\n\r\n.title p {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.container {\r\n    padding: 10% 0;\r\n}\r\n\r\n.info {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 40%;\r\n    padding: 5%;\r\n}\r\n\r\n.btn-primary {\r\n    margin-right: 5%;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/img/music-instruments.png\">\n<div class=\"title\">\n    <h1 class=\"display-4\">Welcome to GigBook!</h1>\n    <p class=\"lead\">The popular booking site for hiring musicians</p>\n    <a class=\"btn btn-primary\" [routerLink]=\"['register']\">Get Started</a>\n    <a class=\"btn btn-success\" [routerLink]=\"['musicians']\">Hire a Musician</a>\n</div>\n\n<!-- <h2>Featured Musicians:</h2> -->\n<!-- A list of musicians that are just starting out -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    // user routes
    HttpService.prototype.loginUser = function (user) {
        console.log("In service");
        return this._http.post("/users/Login", user);
    };
    HttpService.prototype.registerUser = function (user) {
        return this._http.post("/users", user);
    };
    HttpService.prototype.getLoggedInUser = function () {
        return this._http.get("/users/loggedIn");
    };
    HttpService.prototype.addMusician = function (musician) {
        return this._http.post("/musicians", musician);
    };
    HttpService.prototype.getMusicianById = function (id) {
        return this._http.get("/musicians/" + id);
    };
    HttpService.prototype.getAllMusicians = function () {
        return this._http.get("/musicians");
    };
    HttpService.prototype.filterMusicians = function (filter) {
        return this._http.post("/musicians/filter", filter);
    };
    HttpService.prototype.updateMusician = function (musician) {
        return this._http.put("/musicians", musician);
    };
    HttpService.prototype.addGig = function (id, gig) {
        console.log(id, gig, "Here");
        return this._http.post("/gigs/" + id, gig);
    };
    HttpService.prototype.updateGig = function (gig) {
        return this._http.post("/gigs/update", gig);
    };
    HttpService.prototype.gigById = function (id) {
        return this._http.get("/gigs/" + id);
    };
    HttpService.prototype.getMyGigs = function () {
        return this._http.get("/gigs");
    };
    HttpService.prototype.approvePayment = function (id) {
        return this._http.get("/gigs/payment/" + id);
    };
    HttpService.prototype.deleteMusician = function () {
        return this._http.get("/musicians/delete");
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 35%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.login .btn {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login\">\n    <h2>Login</h2>\n    <hr class=\"my-4\">\n    <form (submit)=\"Login()\">\n        <span class=\"error\" *ngIf=\"errors.loginError\">{{errors.loginError}}</span>\n        <span class=\"error\" *ngIf=\"errors.Email\">{{errors.Email}}</span>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"Email\" [(ngModel)]=\"login.email\">\n        </div>\n        <span class=\"error\" *ngIf=\"errors.Password\">{{errors.Password}}</span>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"login.password\">\n            <small class=\"form-text text-muted\"><a>Forgot your password?</a></small>\n        </div>\n        <input class=\"btn btn-success\" type=\"submit\" value=\"Log in\">\n    </form>\n    <a [routerLink]=\"['/register']\">Need to register?</a>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpService, router, app) {
        this._httpService = _httpService;
        this.router = router;
        this.app = app;
        this.login = {
            Email: null,
            Password: null
        };
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        console.log(this.login);
        var observable = this._httpService.loginUser(this.login);
        observable
            .subscribe(function (data) {
            console.log(data);
            _this.app.getUser();
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err['error']);
            var errors = Object.keys(err['error']);
            for (var i = 0; i < errors.length; i++) {
                _this.errors[errors[i]] = err['error'][errors[i]][0];
            }
            ;
            console.log(_this.errors);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/musician-form/musician-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/musician-form/musician-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newMusician {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 70%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.imageUpload {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    width: 40%;\r\n    padding: 3% 5%;\r\n}\r\n\r\n.image-cropper {\r\n    position: relative;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n.formInfo {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 60%;\r\n    padding: 3% 0% 3% 5%;\r\n}\r\n\r\na.btn-success {\r\n    color: white;\r\n    height: auto;\r\n    line-height: 2;\r\n    margin-top: 3vh;\r\n}\r\n\r\na.btn-success:hover {\r\n    color: white;\r\n}\r\n\r\n.Instrument p {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 60%;\r\n}\r\n\r\n.Instrument img {\r\n    height: 2vh;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.Instrument img:hover {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/musician-form/musician-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/musician-form/musician-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container newMusician\">\n    <h2>Register as a Musician</h2>\n    <hr class=\"my-4\">\n    <form (submit)=\"AddMusician()\">\n        <div class=\"imageUpload\">\n            <h3>Add a Profile Picture</h3>\n            <div class=\"image-cropper\" [ngStyle]=\"{ 'background-image': 'url(' + ImageUrl + ')' }\"></div>\n            <label>Upload an image:</label>\n            <span *ngIf=\"errors.Image\" class=\"error\">{{ errors.Image }}</span>\n            <div class=\"input-group\">\n                <label class=\"input-group-btn\">\n                    <span class=\"btn btn-warning\">\n                        Browse&hellip; <input type=\"file\" style=\"display: none;\" multiple name=\"ImageUrl\" [(ngModel)]=\"Musician.ImageUrl\" (change)=\"UpdateImage($event)\">\n                    </span>\n                </label>\n                <input *ngIf=\"ImageUrl\" type=\"text\" class=\"form-control\" readonly name=\"ImageUrl\">\n            </div>\n        </div>\n        <div class=\"formInfo\">\n            <span class=\"error\" *ngIf=\"errors.Name\">{{ errors.Name }}</span>\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"Musician.Name\">\n            </div>\n            <span class=\"error\" *ngIf=\"errors.Summary\">{{ errors.Email }}</span>\n            <div class=\"form-group\">\n                <label>Summary</label>\n                <textarea class=\"form-control\" name=\"Summary\" [(ngModel)]=\"Musician.Summary\"></textarea>\n            </div>\n            <span class=\"error\" *ngIf=\"errors.Location\">{{ errors.Location }}</span>\n            <div class=\"form-group\">\n                <label>Location</label>\n                <input type=\"text\" class=\"form-control\" name=\"Location\" [(ngModel)]=\"Musician.Location\">\n            </div>\n            <h4>Add Instruments:</h4>\n            <span class=\"error\" *ngIf=\"errors.Instruments\">{{ errors.Instruments }}</span>\n            <div *ngFor=\"let instrument of Musician.Instruments\" class=\"Instrument\">\n                <p>{{instrument.name}}, {{instrument.family}}: {{ instrument.yearsExperience }} years</p><img src=\"https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png\" (click)=\"DeleteInstrument(instrument)\">\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-sm-3\">\n                    <label>Name</label>\n                    <input class=\"form-control\" type=\"text\" name=\"InstrumentName\" [(ngModel)]=\"Instrument.name\" placeholder=\"Name\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label>Family</label>\n                    <select class=\"form-control\" name=\"InstrumentFamily\" [(ngModel)]=\"Instrument.family\" placeholder=\"Family\">\n                        <option value=\"Woodwind\">Woodwind</option>\n                        <option value=\"Brass\">Brass</option>\n                        <option value=\"Percussion\">Percussion</option>\n                        <option value=\"String\">String</option>\n                        <option value=\"Keyboard\">Keyboard</option>\n                        <option value=\"Vocal\">Vocal</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label>Years of Experience</label>\n                    <input class=\"form-control\" type=\"text\" name=\"YearsExperience\" [(ngModel)]=\"Instrument.yearsExperience\" placeholder=\"Years of Experience\">\n                </div>\n                <div class=\"form-group col-sm-1\">\n                    <a class=\"btn btn-success\" (click)=\"AddInstrument()\">Add</a>\n                </div>\n            </div>\n            <input class=\"btn btn-success\" type=\"submit\" value=\"{{ action }}\">\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/musician-form/musician-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/musician-form/musician-form.component.ts ***!
  \**********************************************************/
/*! exports provided: MusicianFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicianFormComponent", function() { return MusicianFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicianFormComponent = /** @class */ (function () {
    function MusicianFormComponent(_httpService, router, app) {
        this._httpService = _httpService;
        this.router = router;
        this.app = app;
        this.ImageUrl = "http://www.epsomps.vic.edu.au/wp-content/uploads/2016/09/512x512-1-300x300.png";
        this.Musician = {
            Name: null,
            Summary: null,
            Location: null,
            ImageUrl: null,
            Instruments: []
        };
        this.Instrument = {
            name: null,
            family: null,
            yearsExperience: null
        };
        this.urlReg = /()\w+(\.)+(jpg|png|jpeg|JPG|JPEG|PNG)/;
        this.urlMessage = null;
        this.errors = {};
        this.action = "Register";
    }
    MusicianFormComponent.prototype.ngOnInit = function () {
        if (this.app.loggedInUser.role === "Musician") {
            this.Musician.Name = this.app.loggedInUser.musicianName;
            this.Musician.Summary = this.app.loggedInUser.summary;
            this.Musician.Location = this.app.loggedInUser.location;
            this.Musician.ImageUrl = this.app.loggedInUser.imageUrl;
            this.Musician.Instruments = this.app.loggedInUser.instruments;
            this.ImageUrl = this.app.loggedInUser.imageUrl;
            this.action = "Update";
        }
        else {
            this.Musician.Name = this.app.loggedInUser.name;
        }
    };
    MusicianFormComponent.prototype.UpdateImage = function (event) {
        var _this = this;
        console.log("HERE!");
        if (this.urlReg.test(this.Musician.ImageUrl)) {
            console.log("Good");
            console.log(event);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.ImageUrl = event.target['result'];
                _this.Musician.ImageUrl = event.target['result'];
            };
        }
        else {
            console.log("Invalid");
            this.errors['Image'] = "Not a valid image file.";
        }
    };
    MusicianFormComponent.prototype.AddInstrument = function () {
        if (this.Instrument.name !== null && this.Instrument.family !== null) {
            this.Musician.Instruments.push(this.Instrument);
            this.Instrument = {
                name: null,
                family: null,
                yearsExperience: null
            };
        }
        else {
            this.errors['Instruments'] = "Name and Family fields are required.";
        }
    };
    MusicianFormComponent.prototype.DeleteInstrument = function (data) {
        for (var i = 0; i < this.Musician.Instruments.length; i++) {
            if (this.Musician.Instruments[i] === data) {
                this.Musician.Instruments.splice(i, 1);
            }
        }
    };
    MusicianFormComponent.prototype.AddMusician = function () {
        var _this = this;
        if (this.app.loggedInUser.role === "Musician") {
            var observable = this._httpService.updateMusician(this.Musician);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['id'] != null) {
                    _this.app.loggedInUser = data;
                    _this.router.navigate(["/profile"]);
                }
            }, function (err) {
                console.log(err['error']);
                var errors = Object.keys(err['error']);
                for (var i = 0; i < errors.length; i++) {
                    _this.errors[errors[i]] = err['error'][errors[i]][0];
                }
                ;
            });
        }
        else {
            var observable = this._httpService.addMusician(this.Musician);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['id'] != null) {
                    _this.app.loggedInUser = data;
                    _this.router.navigate(["/profile"]);
                }
            }, function (err) {
                console.log(err['error']);
                var errors = Object.keys(err['error']);
                for (var i = 0; i < errors.length; i++) {
                    _this.errors[errors[i]] = err['error'][errors[i]][0];
                }
                ;
            });
        }
    };
    MusicianFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-musician-form',
            template: __webpack_require__(/*! ./musician-form.component.html */ "./src/app/musician-form/musician-form.component.html"),
            styles: [__webpack_require__(/*! ./musician-form.component.css */ "./src/app/musician-form/musician-form.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], MusicianFormComponent);
    return MusicianFormComponent;
}());



/***/ }),

/***/ "./src/app/musician-list/musician-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/musician-list/musician-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-bar {\r\n    position: fixed;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 20%;\r\n    margin: 3% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n    margin-left: 5%;\r\n}\r\n\r\n.side-bar .btn {\r\n    width: 100%;\r\n    margin-top: 10%;\r\n}\r\n\r\n.accordion {\r\n    display: block;\r\n    text-align: left;\r\n    background-color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n}\r\n\r\n.panel {\r\n    position: hidden;\r\n}\r\n\r\n.active, .accordian:hover {\r\n    color: darkgray;\r\n}\r\n\r\n.musicians {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 60%;\r\n    margin-left: 25%;\r\n}\r\n\r\n.search-bar {\r\n    background-color: white;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 7vh;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n    margin-left: 15%;\r\n}\r\n\r\n.search-bar input {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border: none;\r\n    height: 100%;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.search-bar .form-control {\r\n    width: 80%;\r\n    height: 7vh;\r\n}\r\n\r\n.search-bar .input-group-append {\r\n    width: 20%;\r\n}\r\n\r\n.search-bar .btn {\r\n    height: 7vh;\r\n    width: 100%;\r\n}\r\n\r\n.musician {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 100%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n    margin-left: 15%;\r\n}\r\n\r\n.image-cropper {\r\n    position: relative;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n.left {\r\n    width: 25%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.description {\r\n    width: 60%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 2% 10%;\r\n}\r\n\r\n.description ul {\r\n    list-style: none;\r\n}\r\n\r\n.description h5 {\r\n    font-weight: 400;\r\n}\r\n\r\n.description .offset {\r\n    margin-left: 10%;\r\n}\r\n\r\n.actions {\r\n    width: 15%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.actions .btn {\r\n    width: 100%;\r\n    margin-top: 25%;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/musician-list/musician-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/musician-list/musician-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-bar\">\n    <h3>Filter Musicians</h3>\n    <form (submit)=\"filterMusicians()\">\n        <h5>Location</h5>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"Chicago\">\n            <label>Chicago</label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"New York\">\n            <label>New York</label>\n        </div>\n        <h5>Instrument</h5>\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#woodwinds\">Woodwinds<span>+</span></button>\n        <div class=\"panel collapse\" id=\"woodwinds\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Flute\">\n                <label>Flute</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Clarinet\">\n                <label>Clarinet</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Oboe\">\n                <label>Oboe</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Bassoon\">\n                <label>Bassoon</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Saxophone\">\n                <label>Saxophone</label>\n            </div>\n        </div>\n\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#brass\">Brass<span>+</span></button>\n        <div class=\"panel collapse\" id=\"brass\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Trumpet\">\n                <label>Trumpet</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Trombone\">\n                <label>Trombone</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Horn\">\n                <label>Horn</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Tuba\">\n                <label>Tuba</label>\n            </div>\n        </div>\n\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#percussion\">Percussion<span>+</span></button>\n        <div class=\"panel collapse\" id=\"percussion\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Marimba\">\n                <label>Marimba</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Timpani\">\n                <label>Timpani</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Auxiliary\">\n                <label>Aux.</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Drumset\">\n                <label>Drumset</label>\n            </div>\n        </div>\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#strings\">Strings<span>+</span></button>\n        <div class=\"panel collapse\" id=\"strings\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Violin\">\n                <label>Violin</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Viola\">\n                <label>Viola</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Cello\">\n                <label>Cello</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"String Bass\">\n                <label>String Bass</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Accoustic Guitar\">\n                <label>Accoustic Guitar</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Electric Guitar\">\n                <label>Electric Guitar</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Banjo\">\n                <label>Banjo</label>\n            </div>\n        </div>\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#keyboard\">Keyboard<span>+</span></button>\n        <div class=\"panel collapse\" id=\"keyboard\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Piano\">\n                <label>Piano</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Organ\">\n                <label>Organ</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Synthesizer\">\n                <label>Synthesizer</label>\n            </div>\n        </div>\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#vocal\">Vocal<span>+</span></button>\n        <div class=\"panel collapse\" id=\"vocal\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Soprano\">\n                <label>Soprano</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Alto\">\n                <label>Alto</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Tenor\">\n                <label>Tenor</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Bass\">\n                <label>Bass</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Jazz\">\n                <label>Jazz</label>\n            </div>\n        </div>\n        <button type=\"button\" class=\"accordion\" data-toggle=\"collapse\" data-target=\"#other\">Other<span>+</span></button>\n        <div class=\"panel collapse\" id=\"other\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"All\">\n                <label>All</label>\n            </div>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"Conductor\">\n                <label>Conductor</label>\n            </div>\n        </div>\n        <h5>Years of Experience</h5>\n        <div class=\"slidecontainer\">\n            <p>Over {{ Filter.years }} year(s):</p>\n            <input type=\"range\" min=\"1\" max=\"25\" class=\"slider\" name=\"Years\" [(ngModel)]=\"Filter.years\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-warning\" value=\"Filter\">\n    </form>\n</div>\n<div class=\"musicians\">\n    <form class=\"search-bar\" (submit)=\"filterMusicians()\">\n        <div class=\"input-group mb-3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search by name...\" name=\"Name\" [(ngModel)]=\"Filter.name\">\n            <div class=\"input-group-append\">\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Search\">\n            </div>\n        </div>\n    </form>\n    <div *ngFor=\"let musician of Musicians\" class=\"musician\">\n        <div class=\"left\">\n            <div class=\"image-cropper\" [ngStyle]=\"{ 'background-image': 'url(' + musician.imageUrl + ')'}\"></div>\n        </div>\n        <div class=\"description\">\n            <h2><a [routerLink]=\"['/profile', musician.id]\">{{ musician.musicianName }}</a></h2>\n            <div class=\"offset\">\n                <h5>{{ musician.location }}</h5>\n                <h5>Instruments:</h5>\n                <ul>\n                    <li *ngFor=\"let inst of musician.instruments\">{{ inst.name }}, {{ inst.family }}</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"actions\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['message', musician.id]\">Message</a>\n            <a class=\"btn btn-success\" [routerLink]=\"['request', musician.id]\">Request</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/musician-list/musician-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/musician-list/musician-list.component.ts ***!
  \**********************************************************/
/*! exports provided: MusicianListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicianListComponent", function() { return MusicianListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicianListComponent = /** @class */ (function () {
    function MusicianListComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
        this.Filter = {
            location: null,
            instruments: [],
            years: 1,
            name: null
        };
    }
    MusicianListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.Filter.name = params['name'];
            if (_this.Filter.name) {
                _this.filterMusicians();
            }
            else {
                _this.getAllMusicians();
            }
        });
    };
    MusicianListComponent.prototype.getAllMusicians = function () {
        var _this = this;
        var observable = this._httpService.getAllMusicians();
        observable.subscribe(function (data) {
            _this.Musicians = data;
        });
    };
    MusicianListComponent.prototype.filterMusicians = function () {
        var _this = this;
        console.log(this.Filter);
        var observable = this._httpService.filterMusicians(this.Filter);
        observable.subscribe(function (data) {
            _this.Musicians = data;
        });
    };
    MusicianListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-musician-list',
            template: __webpack_require__(/*! ./musician-list.component.html */ "./src/app/musician-list/musician-list.component.html"),
            styles: [__webpack_require__(/*! ./musician-list.component.css */ "./src/app/musician-list/musician-list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MusicianListComponent);
    return MusicianListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 70%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.image-cropper {\r\n    position: relative;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n.left {\r\n    display: inline-block;\r\n    width: 35%;\r\n    vertical-align: top;\r\n}\r\n\r\n.right {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 65%;\r\n    padding: 2% 10%;\r\n}\r\n\r\n.btn {\r\n    width: 35%;\r\n}\r\n\r\n.btn-danger {\r\n    margin-left: 5%;\r\n}\r\n\r\n.text-muted {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container profile\">\n    <h2>{{ name }}</h2>\n    <hr class=\"my-4\">\n    <div *ngIf='user.role === \"Musician\"' class=\"musician\">\n        <div class=\"left\">\n            <div class=\"image-cropper\" [ngStyle]=\"{ 'background-image': 'url(' + user.imageUrl + ')' }\"></div>\n        </div>\n        <div class=\"right\">\n            <h4>About {{ user.musicianName }}:</h4>\n            <p>{{ user.summary }}</p>\n            <h4>Location:</h4>\n            <p>{{ user.location }}</p>\n            <h4>Instruments:</h4>\n            <p *ngFor=\"let inst of user.instruments\">{{ inst.name }}, {{ inst.family }} ({{ inst.yearsExperience }} years of experience)</p>\n            <a *ngIf=\"currUser.id == user.id\" class=\"btn btn-warning\" [routerLink]=\"['/addMusician']\">Edit</a>\n            <button *ngIf=\"currUser.id == user.id\" class=\"btn btn-danger\" (click)=\"deleteMusician()\">Delete Profile</button>\n            <small *ngIf=\"currUser.id == user.id\" class=\"text-muted\">If you delete your musician profile, your login information and user information will be saved.</small>\n        </div>\n    </div>\n    <div *ngIf=\"user.role != 'Musician'\">\n        <p>You are not registered as a musician. Click <a [routerLink]=\"['/addMusician']\">here</a> to register as a musician now or <a href=\"['/addMusicians']\">here</a> to browse all current musicians</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(app, router, _httpService, _route) {
        this.app = app;
        this.router = router;
        this._httpService = _httpService;
        this._route = _route;
        this.name = null;
        this.user = null;
        this.currUser = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.app.loggedInUser;
        if (this.currUser == null) {
            this.currUser = {};
            this.currUser['id'] = 0;
        }
        this._route.params.subscribe(function (params) {
            if (params['id']) {
                var observable = _this._httpService.getMusicianById(params['id']);
                observable.subscribe(function (data) {
                    _this.user = data;
                    _this.name = data['musicianName'];
                    console.log(_this.user);
                });
            }
            else {
                console.log(_this.app.loggedInUser);
                if (_this.app.loggedInUser !== null) {
                    _this.user = _this.app.loggedInUser;
                    if (_this.user.role != "Musician" || _this.user.name == _this.user.musicianName) {
                        _this.name = _this.user.name;
                    }
                    else {
                        _this.name = _this.user.musicianName + " (" + _this.user.name + ")";
                    }
                }
                else {
                    _this.router.navigate(["/login"]);
                }
            }
        });
    };
    ProfileComponent.prototype.deleteMusician = function () {
        var _this = this;
        var observable = this._httpService.deleteMusician();
        observable.subscribe(function (data) {
            _this.app.loggedInUser = data;
            _this.router.navigate(["/"]);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 35%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.login .btn {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login\">\n    <h2>Register</h2>\n    <hr class=\"my-4\">\n    <form (submit)=\"Register()\">\n        <span class=\"error\" *ngIf=\"errors.Name\">{{ errors.Name }}</span>\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"user.Name\">\n        </div>\n        <span class=\"error\" *ngIf=\"errors.Email\">{{ errors.Email }}</span>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"Email\" [(ngModel)]=\"user.Email\">\n        </div>\n        <span class=\"error\" *ngIf=\"errors.Password\">{{ errors.Password }}</span>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"user.Password\">\n        </div>\n        <span class=\"error\" *ngIf=\"errors.ConfirmPassword\">{{ errors.ConfirmPassword }}</span>\n        <div class=\"form-group\">\n            <label>Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"ConfirmPassword\" [(ngModel)]=\"user.ConfirmPassword\">\n        </div>\n        <input class=\"btn btn-success\" type=\"submit\" value=\"Register\">\n    </form>\n    <a [routerLink]=\"['/login']\">Already registered?</a>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_httpService, router, app) {
        this._httpService = _httpService;
        this.router = router;
        this.app = app;
        this.user = {
            Name: null,
            Email: null,
            Password: null,
            ConfirmPassword: null
        };
        this.errors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.Register = function () {
        var _this = this;
        var observable = this._httpService.registerUser(this.user);
        observable.subscribe(function (data) {
            console.log(data);
            _this.app.getUser();
            _this.router.navigate(["/"]);
        }, function (err) {
            console.log(err['error']);
            var errors = Object.keys(err['error']);
            for (var i = 0; i < errors.length; i++) {
                _this.errors[errors[i]] = err['error'][errors[i]][0];
            }
            ;
            console.log(_this.errors);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mandy\Documents\Coding Dojo\CSharp\GigBook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map