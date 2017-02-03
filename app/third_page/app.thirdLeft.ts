import { Component } from '@angular/core';
import { ContactService } from './app.contactService';

import {Contact} from './contact';

@Component({
  selector: 'third-left',
  templateUrl:'./app/third_page/third_left.html',
   styleUrls:['./app/third_page/css/third_left.css'],
 
        providers:[ContactService]    

            
})

export class thirdLeftComponent{
  public contactService;
  
	contacts: Array<Contact>;
  constructor(contactService:ContactService){
  	this.contactService=contactService;        
  	this.contacts = [];
   /* this.userdName=this.contactService.getUserName();*/
  }
  
   addContact(name,phone){
        let contact = new Contact(name,phone);
        this.contacts.push(contact);
        
    }
        removeContact(contact){
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
    }
    ethoOnnu(textValuue){
      
    this.contactService.setDatas(textValuue);
    }


}