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
var platform_browser_1 = require('@angular/platform-browser');
var app_main_component_1 = require('./main_component/app.main.component');
var app_component_1 = require('./app_component/app.component');
var app_second_1 = require('./second_page/app.second');
var app_third_1 = require('./third_page/app.third');
var app_thirdLeft_1 = require('./third_page/app.thirdLeft');
var app_thirdRight_1 = require('./third_page/app.thirdRight');
var app_service_1 = require('./app_component/app.service');
var app_contactService_1 = require('./third_page/app.contactService');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot([
                    { path: '', component: app_component_1.loginComponent },
                    { path: 'login', component: app_component_1.loginComponent },
                    { path: 'second', component: app_second_1.secondComponent },
                    { path: 'third', component: app_third_1.thirdComponent }
                ])
            ],
            declarations: [app_main_component_1.mainComponent, app_component_1.loginComponent, app_second_1.secondComponent, app_third_1.thirdComponent, app_thirdLeft_1.thirdLeftComponent, app_thirdRight_1.thirdRightComponent],
            providers: [app_service_1.LoginService, app_contactService_1.ContactService],
            bootstrap: [app_main_component_1.mainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map