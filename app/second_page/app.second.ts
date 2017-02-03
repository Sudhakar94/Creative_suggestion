import { Component } from '@angular/core';
import { Contact } from './contact';
import { Contacted } from './contacted';
import { Router } from '@angular/router';
import { SecondService } from '../header_component/app.secondService';
import { ContactService } from '../third_page/app.contactService';
@Component({
    selector: 'secon',
    templateUrl: './app/second_page/second.html',
    styleUrls: ['./app/second_page/css/second.css'],
    providers: [SecondService]
})
export class secondComponent {
    public enablePost: string;
    public content: string;
    public contacts: Array < number > ;
    public countt: Array < number > ;
    public userName: Array < number > ;
    public InitiName: Array < number > ;
    public dateAry: Array < number > ;
    public fullDay: Array < number > ;
    public contactService;
    public secondService;
    public storedData;
    public retrivContacts;
    public retrivCountt;
    public date;
    public comntContent;
    public jstContnt;
    public emptyText;
    constructor(router: Router, secondService: SecondService, contactService: ContactService) {
        this.contactService = contactService;
        this.secondService = secondService;
        var v = 0;
        console.log(this.contactService.getUserData())
        this.contacts = this.contactService.getUserData();;
        this.userName = this.contactService.getUserAryName();
        this.InitiName = this.contactService.getUserIniName();
        this.countt = this.contactService.getCount();
        this.dateAry = this.contactService.getPostDate();
        this.fullDay = [];
        this.storedData = this.contactService.getDonoName();
    }
    doPost() {
        this.enablePost = "true";
    }
    closPost() {
        this.enablePost = "false";
    }
    store(v) {
        for (let k = 0; k < this.contacts.length; k++)
            this.fullDay[k] = {
                data: this.contacts[k],
                lik: this.countt[k],
                naame: this.userName[k],
                inital: this.InitiName[k],
                dat: this.dateAry[k]
            }
        var regta = this.fullDay;
        console.log(this.fullDay)
        this.contactService.setDonoName(regta);
        var pushCounts = this.countt;
        this.contactService.setCount(pushCounts);
        this.individualStoring();
        this.Retrive();
    }
    individualStoring() {
       this.retrivContacts = this.contactService.getUserData();
        console.log(this.retrivContacts);
        this.retrivCountt = this.contactService.getCount();
        console.log(this.retrivCountt);
    }
    Retrive() {
        this.storedData = [];
        this.storedData = this.contactService.getDonoName();
        console.log(this.storedData);
        console.log(this.countt);
    }
    dontknow(dontknowfrst) {
    }
    postFunction(content) {
        this.enablePost = "false";
        this.content = "";
        let contact = new Contact(content);
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
        let dt = this.date.getDate() + " " + month[this.date.getMonth()] + " " + this.date.getFullYear();
        console.log(dt);
        this.dateAry.push(dt);
        this.store();
    }
    removeContact(contact) {
        let index = this.fullDay.indexOf(contact);
        console.log(index);
        this.fullDay.splice(index, 1);
    }
    likeCount(contact) {
        let indexs = this.fullDay.indexOf(contact);
        console.log(indexs);
        console.log(this.userName[indexs]);
        this.countt[indexs] = this.countt[indexs] + 1;
        this.store();
        console.log(this.countt[indexs]);
    }
    comntPost(jstContnt) {
        this.comntContent = jstContnt;
        this.jstContnt = "";
    }
    commEnt() {
        this.emptyText = "true";
    }
}