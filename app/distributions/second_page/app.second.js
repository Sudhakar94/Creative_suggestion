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
var contact_1 = require('./contact');
var router_1 = require('@angular/router');
var app_secondService_1 = require('../header_component/app.secondService');
var app_contactService_1 = require('../third_page/app.contactService');
var secondComponent = (function () {
    function secondComponent(router, secondService, contactService) {
        this.contactService = contactService;
        this.secondService = secondService;
        var v = 0;
        console.log(this.contactService.getUserData());
        this.contacts = this.contactService.getUserData();
        ;
        this.userName = this.contactService.getUserAryName();
        this.InitiName = this.contactService.getUserIniName();
        this.countt = this.contactService.getCount();
        this.dateAry = this.contactService.getPostDate();
        this.fullDay = [];
        this.storedData = this.contactService.getDonoName();
    }
    secondComponent.prototype.doPost = function () {
        this.enablePost = "true";
    };
    secondComponent.prototype.closPost = function () {
        this.enablePost = "false";
    };
    secondComponent.prototype.store = function (v) {
        for (var k = 0; k < this.contacts.length; k++)
            this.fullDay[k] = {
                data: this.contacts[k],
                lik: this.countt[k],
                naame: this.userName[k],
                inital: this.InitiName[k],
                dat: this.dateAry[k]
            };
        var regta = this.fullDay;
        console.log(this.fullDay);
        this.contactService.setDonoName(regta);
        var pushCounts = this.countt;
        this.contactService.setCount(pushCounts);
        this.individualStoring();
        this.Retrive();
    };
    secondComponent.prototype.individualStoring = function () {
        this.retrivContacts = this.contactService.getUserData();
        console.log(this.retrivContacts);
        this.retrivCountt = this.contactService.getCount();
        console.log(this.retrivCountt);
    };
    secondComponent.prototype.Retrive = function () {
        this.storedData = [];
        this.storedData = this.contactService.getDonoName();
        console.log(this.storedData);
        console.log(this.countt);
    };
    secondComponent.prototype.dontknow = function (dontknowfrst) {
    };
    secondComponent.prototype.postFunction = function (content) {
        this.enablePost = "false";
        this.content = "";
        var contact = new contact_1.Contact(content);
        console.log(this.contacts);
        this.contacts.push(contact);
        console.log(this.contacts);
        var pusContcts = this.contacts;
        this.contactService.setUserData(pusContcts);
        this.countt.push(0);
        var firstLetter = this.contactService.getUserName();
        console.log(firstLetter);
        var initial = firstLetter.charAt(0);
        console.log(initial);
        this.userName.push(firstLetter);
        this.InitiName.push(initial);
        this.date = new Date();
        console.log(this.date);
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        console.log(month[this.date.getMonth()]);
        console.log(this.date.getDate());
        console.log(this.date.getFullYear());
        var dt = this.date.getDate() + " " + month[this.date.getMonth()] + " " + this.date.getFullYear();
        console.log(dt);
        this.dateAry.push(dt);
        this.store();
    };
    secondComponent.prototype.removeContact = function (contact) {
        var index = this.fullDay.indexOf(contact);
        console.log(index);
        this.fullDay.splice(index, 1);
    };
    secondComponent.prototype.likeCount = function (contact) {
        var indexs = this.fullDay.indexOf(contact);
        console.log(indexs);
        console.log(this.userName[indexs]);
        this.countt[indexs] = this.countt[indexs] + 1;
        this.store();
        console.log(this.countt[indexs]);
    };
    secondComponent.prototype.comntPost = function (jstContnt) {
        this.comntContent = jstContnt;
        this.jstContnt = "";
    };
    secondComponent.prototype.commEnt = function () {
        this.emptyText = "true";
    };
    secondComponent = __decorate([
        core_1.Component({
            selector: 'secon',
            templateUrl: './app/second_page/second.html',
            styleUrls: ['./app/second_page/css/second.css'],
            providers: [app_secondService_1.SecondService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_secondService_1.SecondService, app_contactService_1.ContactService])
    ], secondComponent);
    return secondComponent;
}());
exports.secondComponent = secondComponent;
//# sourceMappingURL=app.second.js.map