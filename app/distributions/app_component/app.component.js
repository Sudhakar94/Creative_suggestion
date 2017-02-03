"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_contactService_1 = require('../third_page/app.contactService');
var app_service_1 = require('./app.service');
var loginComponent = (function () {
    function loginComponent(loginService, router, contactService) {
        this.contactService = contactService;
        this.abc = loginService.getData();
        this.router = router;
    }
    loginComponent.prototype.eventHandler = function (event, userName, password) {
        if (event.keyCode == "13") {
            this.clickedSubmit(userName, password);
        }
    };
    loginComponent.prototype.clickedSubmit = function (userName, password) {
        var data = this.abc;
        var passUsername = "";
        var justDummy = "cx";
        var errorMsg = "ENTER CORRECT CREDENTIALS";
        data.forEach(function (aname) {
            console.log(aname);
            if (aname.name == userName) {
                if (aname.age == password) {
                    passUsername = userName;
                    justDummy = "true";
                }
                else if (aname.age != password) {
                    errorMsg = "INCORRECT PASSWORD";
                }
            }
        });
        if (justDummy == "true") {
            this.contactService.setUserName(passUsername);
            this.router.navigate(['/second']);
        }
        this.newName = errorMsg;
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/app_component/login.html',
            styleUrls: ['./app/app_component/css/login.css'],
            providers: [app_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [app_service_1.LoginService, router_1.Router, app_contactService_1.ContactService])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=app.component.js.map