import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { containerComponent }   from './container_component/app.container.component';
import { mainComponent }   from './main_component/app.main.component';
import { headarComponent }   from './header_component/app.header.component';

import { loginComponent }   from './app_component/app.component';
import { likeComponent }   from './like_component/app.like.component';
import { secondComponent }   from './second_page/app.second';
import { thirdComponent }   from './third_page/app.third';

import { thirdLeftComponent }   from './third_page/app.thirdLeft';
import { thirdRightComponent }   from './third_page/app.thirdRight';

import { LoginService } from './app_component/app.service';
import { ContactService } from './third_page/app.contactService';

import { FormsModule }   from '@angular/forms';
import { Routes,RouterModule }   from '@angular/router';





@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot
  					([
                { path: '', component: mainComponent },
      					{ path: 'home', component: mainComponent },
      					{ path: 'login', component: loginComponent },
                { path: 'second', component: secondComponent },
                { path: 'like', component: likeComponent },
      					
      					{ path: 'third', component: thirdComponent }
    				]) 
    			],
  
  declarations: [ mainComponent,likeComponent,headarComponent,containerComponent,loginComponent,secondComponent,thirdComponent,thirdLeftComponent,thirdRightComponent],

  providers:[LoginService,ContactService],

  bootstrap:    [ containerComponent ]
})
export class AppModule { }