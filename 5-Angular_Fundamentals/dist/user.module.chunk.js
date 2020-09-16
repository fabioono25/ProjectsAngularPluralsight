webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/user/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\r\n<hr>\r\n<div class=\"col-md-4\">\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\" >\r\n      <label for=\"userName\">User Name:</label>\r\n      <em *ngIf=\"loginForm.controls.userName?.invalid && (loginForm.controls.userName?.touched || mouseoverLogin)\">Required</em>\r\n      <input (ngModel)=\"username\" name=\"userName\" required id=\"userName\" type=\"text\" class=\"form-control\" placeholder=\"User Name...\" />\r\n    </div>\r\n    <div class=\"form-group\" >\r\n      <label for=\"password\">Password:</label>\r\n      <em *ngIf=\"loginForm.controls.password?.invalid  && (loginForm.controls.password?.touched || mouseoverLogin)\">Required</em>\r\n      <input (ngModel)=\"password\" name=\"password\" required id=\"password\" type=\"password\" class=\"form-control\"placeholder=\"Password...\" />\r\n    </div>\r\n\r\n    <span (mouseenter)=\"mouseoverLogin=true\" (mouseleave)=\"mouseoverLogin=false\">\r\n      <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-primary\">Login</button>\r\n    </span>\r\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n  <br>\r\n  <div *ngIf=\"loginInvalid\" class=\"alert alert-danger\"> Invalid login info</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginInvalid = false;
        //johnpapa
    }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe(function (resp) {
            if (!resp) {
                _this.loginInvalid = true;
            }
            else {
                _this.router.navigate(['events']);
            }
        });
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/login.component.html"),
        styles: ["\n    em { float:right; color:#E05C65; padding-left:10px; }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Edit Your Profile </h1>\r\n  <hr>\r\n  <div class=\"col-md-4\">\r\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveProfile(profileForm.value)\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{'error' : !validateFirstName() }\">\r\n        <label for=\"firstName\">First Name:</label>\r\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.required\">Required</em>\r\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.pattern\">Must start with a letter</em>\r\n        <input formControlName=\"firstName\" id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name...\" />\r\n      </div>\r\n      <div class=\"form-group\"  [ngClass]=\"{'error' : !validateLastName() }\">\r\n        <label for=\"lastName\">Last Name:</label>\r\n        <em *ngIf=\"!validateLastName()\">Required</em>\r\n        <input formControlName=\"lastName\" id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Last Name...\" />\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n\r\n      <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"logout()\">Logout</button>\r\n    </form>\r\n  <div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProfileComponent = (function () {
    function ProfileComponent(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.authService.currentUser.firstName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z].*')]);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.authService.currentUser.lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.saveProfile = function (formValues) {
        var _this = this;
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
                .subscribe(function () {
                //this.router.navigate(['events'])
                _this.toastr.success('profile saved');
            });
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function () {
            _this.router.navigate(['/user/login']);
        });
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/profile.component.html"),
        styles: ["\n  em {float:right; color:#E05C65; padding-left: 10px;}\n  .error input {background-color:#E3C3C5;}\n  .error ::-webkit-input-placeholder { color: #999; }\n  .error ::-moz-placeholder { color: #999; }\n  .error :-moz-placeholder { color:#999; }\n  .error :ms-input-placeholder { color: #999; }\n"]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__common_toastr_service__["a" /* TOASTR_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__common_toastr_service__["Toastr"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_toastr_service__["Toastr"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routes__ = __webpack_require__("../../../../../src/app/user/user.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("../../../../../src/app/user/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("../../../../../src/app/user/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__user_routes__["a" /* userRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */]
        ],
        providers: []
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/user/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_component__ = __webpack_require__("../../../../../src/app/user/profile.component.ts");


var userRoutes = [
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__profile_component__["a" /* ProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=user.routes.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map