import { Component } from '@angular/core';


import { thirdLeftComponent }   from './app.thirdLeft';
import { thirdRightComponent }   from './app.thirdRight';


@Component({
  selector: 'three',
  templateUrl:'./app/third_page/third.html',
   styleUrls:['./app/third_page/css/third.css'],
 
            
})
 



export class thirdComponent{


  
  contacts: Array<Contact>;
  constructor(){
  	this.contacts = [];
  }
  
  /* addContact(name,phone){
        let contact = new Contact(name,phone);
        this.contacts.push(contact);
    }

    removeContact(contact){
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
    }
    checking()
    {
    	console.log(this.contacts);
    }
   */

 }