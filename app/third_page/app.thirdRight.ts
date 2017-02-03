import { Component } from '@angular/core';
import { ContactService } from './app.contactService';
import {Contact} from './contact';

@Component({
  selector: 'third-right',
  templateUrl:'./app/third_page/third_right.html',
   styleUrls:['./app/third_page/css/third_right.css'],
 inputs:['contacts']
            

            
})

export class thirdRightComponent{

	contacts: Array<Contact>;
  constructor(contactService:ContactService){
  	this.contacts = [];
  this.contactService=contactService;   
  	
  }

justGo(){
  this.vdsa=this.contactService.getDatas();
	console.log(this.vdsa);
}

	
}