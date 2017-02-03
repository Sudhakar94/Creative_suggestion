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
var app_contactService_1 = require('./app.contactService');
var thirdRightComponent = (function () {
    function thirdRightComponent(contactService) {
        this.contacts = [];
        this.contactService = contactService;
    }
    thirdRightComponent.prototype.justGo = function () {
        this.vdsa = this.contactService.getDatas();
        console.log(this.vdsa);
    };
    thirdRightComponent = __decorate([
        core_1.Component({
            selector: 'third-right',
            templateUrl: './app/third_page/third_right.html',
            styleUrls: ['./app/third_page/css/third_right.css'],
            inputs: ['contacts']
        }), 
        __metadata('design:paramtypes', [app_contactService_1.ContactService])
    ], thirdRightComponent);
    return thirdRightComponent;
}());
exports.thirdRightComponent = thirdRightComponent;
//# sourceMappingURL=app.thirdRight.js.map