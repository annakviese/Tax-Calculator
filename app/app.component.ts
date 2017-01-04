import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <provinces></provinces>`

})
export class AppComponent { 
    title = "TFSA vs RRSP"
    
}
