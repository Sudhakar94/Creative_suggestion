import { Component } from '@angular/core';

import { ContactService } from '../third_page/app.contactService';


@Component({
    selector: 'like',
    templateUrl: './app/like_component/like.html',
    styleUrls: ['./app/like_component/css/like.css'],




})

export class likeComponent {
    public contactService;
    public eman;
    constructor(contactService: ContactService) {

        this.contactService = contactService;
        this.eman = [{
            "key": "sudhakar",
            "value": "1994",
        }, {
            "key": "gaya",
            "value": "1992",
        }, {
            "key": "srini",
            "value": "1991",
        }, {
            "key": "sarava",
            "value": "1897",
        }, {
            "key": "edvin",
            "value": "1984",
        }];

    }



}