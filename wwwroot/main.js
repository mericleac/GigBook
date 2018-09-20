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
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">GigBook</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/musicians']\">Browse Musicians</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/gigs']\">My Gigs</a></li>\n            <li *ngIf=\"loggedInUser === null\" class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">My Profile</a></li>\n            <li *ngIf=\"loggedInUser !== null\" class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">{{ loggedInUser.name }}'s Profile</a></li>\n        </ul>\n        <a *ngIf=\"loggedInUser === null\" class=\"nav-link\" [routerLink]=\"['/login']\">Login/Register</a>\n        <a *ngIf=\"loggedInUser !== null\" class=\"nav-link\" [routerLink]=\"['/addMusician']\">Register as a musician</a>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Find Musicians\">\n            <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'main';
        this.loggedInUser = null;
    }
    AppComponent.prototype.getUser = function () {
        var _this = this;
        var observable = this._httpService.getLoggedInUser();
        observable.subscribe(function (data) {
            _this.loggedInUser = data;
            if (data['musicianId'] != null) {
                var observable_1 = _this._httpService.getMusicianById(data['musicianId']);
                observable_1.subscribe(function (data) {
                    _this.loggedInUser['musician'] = data;
                });
            }
            ;
        });
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
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

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron-fluid {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    background: url(\"http://auserwirth.info/wp-content/uploads/2018/03/minimalist-animal-wallpapers-for-desktops-3-i-simple-background-minimalism-cat-drawing-animals-sitting-blue-background-wallpapers-hd-desktop-and-mobile-backgrounds.jpg\");\r\n    background-position: left bottom;\r\n    background-size: 100%;\r\n    width: 60%;\r\n    height: 50vh;\r\n    padding-left: 20%;\r\n}\r\n\r\n.container {\r\n    padding: 10% 0;\r\n}\r\n\r\n.info {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 40%;\r\n    padding: 5%;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Welcome to GigBook!</h1>\n        <p class=\"lead\">The popular booking site for hiring musicians</p>\n    </div>\n</div>\n<div class=\"info\">\n    <h2>Because everyone could use a little music</h2>\n    <p>GigBook is a user friendly booking website that promotes local musicians. Our algorithms are designed to give starting musicians a boost while providing our clients with music they will love.</p>\n</div>\n\n<h2>Featured Musicians:</h2>\n<!-- A list of musicians that are just starting out -->"

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
            console.log("HERE!!!!!");
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

module.exports = "<div class=\"container newMusician\">\n    <h2>Register as a Musician</h2>\n    <hr class=\"my-4\">\n    <form (submit)=\"AddMusician()\">\n        <div class=\"imageUpload\">\n            <h3>Add a Profile Picture</h3>\n            <div class=\"image-cropper\" [ngStyle]=\"{ 'background-image': 'url(' + ImageUrl + ')' }\"></div>\n            <label>Upload an image:</label>\n            <span *ngIf=\"errors.Image\" class=\"error\">{{ errors.Image }}</span>\n            <div class=\"input-group\">\n                <label class=\"input-group-btn\">\n                    <span class=\"btn btn-warning\">\n                        Browse&hellip; <input type=\"file\" style=\"display: none;\" multiple name=\"ImageUrl\" [(ngModel)]=\"Musician.ImageUrl\" (change)=\"UpdateImage($event)\">\n                    </span>\n                </label>\n                <input *ngIf=\"ImageUrl\" type=\"text\" class=\"form-control\" readonly name=\"ImageUrl\">\n            </div>\n        </div>\n        <div class=\"formInfo\">\n            <span class=\"error\" *ngIf=\"errors.Name\">{{ errors.Name }}</span>\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"Musician.Name\">\n            </div>\n            <span class=\"error\" *ngIf=\"errors.Summary\">{{ errors.Email }}</span>\n            <div class=\"form-group\">\n                <label>Summary</label>\n                <textarea class=\"form-control\" name=\"Summary\" [(ngModel)]=\"Musician.Summary\"></textarea>\n            </div>\n            <span class=\"error\" *ngIf=\"errors.Location\">{{ errors.Location }}</span>\n            <div class=\"form-group\">\n                <label>Location</label>\n                <input type=\"text\" class=\"form-control\" name=\"Location\" [(ngModel)]=\"Musician.Location\">\n            </div>\n            <h4>Add Instruments:</h4>\n            <div *ngFor=\"let instrument of Musician.Instruments\" class=\"Instrument\">\n                <p>{{instrument.Name}}, {{instrument.Family}}: {{ instrument.YearsExperience }} years</p><img src=\"https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png\" (click)=\"DeleteInstrument(instrument)\">\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-sm-3\">\n                    <label>Name</label>\n                    <input class=\"form-control\" type=\"text\" name=\"InstrumentName\" [(ngModel)]=\"Instrument.Name\" placeholder=\"Name\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label>Family</label>\n                    <select class=\"form-control\" name=\"InstrumentFamily\" [(ngModel)]=\"Instrument.Family\" placeholder=\"Family\">\n                        <option value=\"Woodwind\">Woodwind</option>\n                        <option value=\"Brass\">Brass</option>\n                        <option value=\"Percussion\">Percussion</option>\n                        <option value=\"String\">String</option>\n                        <option value=\"Keyboard\">Keyboard</option>\n                        <option value=\"Vocal\">Vocal</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label>Years of Experience</label>\n                    <input class=\"form-control\" type=\"text\" name=\"YearsExperience\" [(ngModel)]=\"Instrument.YearsExperience\" placeholder=\"Years of Experience\">\n                </div>\n                <div class=\"form-group col-sm-1\">\n                    <a class=\"btn btn-success\" (click)=\"AddInstrument()\">Add</a>\n                </div>\n            </div>\n            <input class=\"btn btn-success\" type=\"submit\" value=\"Register\">\n        </div>\n    </form>\n</div>"

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
            Name: null,
            Family: null,
            YearsExperience: null
        };
        this.urlReg = /()\w+(\.)+(jpg|png|jpeg|JPG|JPEG|PNG)/;
        this.urlMessage = null;
        this.errors = {};
    }
    MusicianFormComponent.prototype.ngOnInit = function () {
        this.Musician.Name = this.app.loggedInUser.name;
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
        this.Musician.Instruments.push(this.Instrument);
        this.Instrument = {
            Name: null,
            Family: null,
            YearsExperience: null
        };
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
        var observable = this._httpService.addMusician(this.Musician);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['MusicianId'] != null) {
                _this.app.getUser();
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

module.exports = ".newMusician {\r\n    background-color: white;\r\n    padding: 3% 5%;\r\n    width: 60%;\r\n    margin: 5% auto;\r\n    box-shadow: 3px 3px 3px grey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.imageUpload {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    width: 40%;\r\n}\r\n\r\n.formInfo {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 60%;\r\n}"

/***/ }),

/***/ "./src/app/musician-list/musician-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/musician-list/musician-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Musician List works!\n</p>\n"

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
    function MusicianListComponent() {
    }
    MusicianListComponent.prototype.ngOnInit = function () {
    };
    MusicianListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-musician-list',
            template: __webpack_require__(/*! ./musician-list.component.html */ "./src/app/musician-list/musician-list.component.html"),
            styles: [__webpack_require__(/*! ./musician-list.component.css */ "./src/app/musician-list/musician-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container profile\">\n    <h2>{{ Name }}</h2>\n    <hr class=\"my-4\">\n    <div *ngIf=\"Musician != null\" class=\"musician\">\n        <div class=\"left\">\n            <div class=\"image-cropper\" [ngStyle]=\"{ 'background-image': 'url(' + Musician.ImageUrl + ')' }\"></div>\n        </div>\n        <div class=\"right\">\n            <h4>About {{ Musician.Name }}:</h4>\n            <p>{{ Musician.Summary }}</p>\n            <h4>Location:</h4>\n            <p>{{ Musician.Location }}</p>\n            <h4>Instruments:</h4>\n            <p *ngFor=\"let inst of Musician.Instruments\">{{ inst.Name }}, {{ inst.Family }} ({{ inst.YearsExperience }} years of experience)</p>\n        </div>\n    </div>\n    <div *ngIf=\"Musician == null\">\n        <p>You are not registered as a musician. Click <a [routerLink]=\"['/addMusician']\">here</a> to register as a musician now or <a href=\"['/addMusicians']\">here</a> to browse all current musicians</p>\n    </div>\n</div>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
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
    function ProfileComponent(app) {
        this.app = app;
        this.Name = null;
        this.Musician = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log(this.app.loggedInUser);
        if (this.app.loggedInUser.Musician != null) {
            this.Musician = this.app.loggedInUser.Musician;
            if (this.Musician.Name == this.app.loggedInUser.Name) {
                this.Name = this.Musician.Name;
            }
            else {
                this.Name = "this.Musician.Name (" + this.app.loggedInUser.Name + ")";
            }
        }
        else {
            this.Name = this.app.loggedInUser.Name;
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
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
            // this.app.getUser();
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