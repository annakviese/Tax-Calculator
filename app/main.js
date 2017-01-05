"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
// @NgModule ({
//     declarations: [ AppComponent, InputFormComponent ],
//     imports: [ BrowserModule, ReactiveFormsModule,
//         SelectModule, NgModule],
//     bootstrap: [ AppComponent ]
// })
// class AppModule { }
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map