import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ContactService } from '../third_page/app.contactService';
import { LoginService } from './app.service';

@Component({
    selector: 'login',
    templateUrl: './app/app_component/login.html',
    styleUrls: ['./app/app_component/css/login.css'],
    providers: [LoginService]
})
export class loginComponent {
    public contactService;
    public abc;
    public router;
    public newName;
    constructor(loginService: LoginService, router: Router, contactService: ContactService) {
        this.contactService = contactService;
        this.abc = loginService.getData();
        this.router = router;
    }
    public eventHandler(event, userName, password) {

        if (event.keyCode == "13") {
            this.clickedSubmit(userName, password)
        }
    }
    clickedSubmit(userName, password) {
        let data = this.abc;
        let passUsername = "";
        let justDummy = "cx";
        let errorMsg = "ENTER CORRECT CREDENTIALS";
        data.forEach(function(aname) {
                console.log(aname);
                if (aname.name == userName) {
                    if (aname.age == password) {
                        passUsername = userName;
                        justDummy = "true"
                    } else if (aname.age != password) {

                        errorMsg = "INCORRECT PASSWORD";
                    }
                }
            }
            if (justDummy == "true") {
                this.contactService.setUserName(passUsername);
                this.router.navigate(['/second']);
            }
            this.newName = errorMsg;
        }
    }