"use strict";
var ContactService = (function () {
    function ContactService() {
        this.glocalvariable = "";
        this.donoName = "";
        this.konoName = "";
        this.UserData = [];
        this.countList = [];
        this.userAryName = [];
        this.userIniName = [];
        this.dateList = [];
    }
    ContactService.prototype.setUserName = function (passUsername) {
        this.glocalvariable = passUsername;
    };
    ContactService.prototype.getUserName = function () {
        return this.glocalvariable;
    };
    ContactService.prototype.setPostDate = function (postDat) {
        this.dateList = postDat;
    };
    ContactService.prototype.getPostDate = function () {
        return this.dateList;
    };
    ContactService.prototype.setUserAryName = function (passName) {
        this.userAryName = passName;
    };
    ContactService.prototype.getUserAryName = function () {
        return this.userAryName;
    };
    ContactService.prototype.setUserIniName = function (iniName) {
        this.userIniName = iniName;
    };
    ContactService.prototype.getUserIniName = function () {
        return this.userIniName;
    };
    ContactService.prototype.setDonoName = function (pass) {
        this.donoName = pass;
    };
    ContactService.prototype.getDonoName = function () {
        return this.donoName;
    };
    ContactService.prototype.setKonoName = function (passed) {
        this.konoName = passed;
    };
    ContactService.prototype.getKonoName = function () {
        return this.konoName;
    };
    ContactService.prototype.setUserData = function (passer) {
        this.UserData = passer;
    };
    ContactService.prototype.getUserData = function () {
        console.log(this.UserData);
        return this.UserData;
    };
    ContactService.prototype.setCount = function (reciver) {
        this.countList = reciver;
    };
    ContactService.prototype.getCount = function () {
        return this.countList;
    };
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=app.contactService.js.map