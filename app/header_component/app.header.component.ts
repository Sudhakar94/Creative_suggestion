import { Component } from '@angular/core';
import { ContactService } from '../third_page/app.contactService';
import { Router } from '@angular/router';
@Component({
    selector: 'headar',
    templateUrl: './app/header_component/header.html',
    styleUrls: ['./app/header_component/css/header.css']
})
export class headarComponent {
    public contactService;
    public router;
    public userdName;
    constructor(contactService: ContactService, router: Router) {
        this.contactService = contactService;
        this.router = router;
        this.userdName = this.contactService.getUserName();
        console.log(this.userdName);
        if (this.userdName == "") {
           this.router.navigate(['/login']);
        }
    }
}