import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component ({
    selector: 'my-app',
    template: `<h1>{{title}}</h1> 
               <ul>
                    <li *ngFor="let province of provinces">
                        <p>{{province.name}} </p>
                        <p>{{province.taxBrackets}}</p>
                    </li>
                </ul>`
})
class AppComponent { 
    title = "TFSA vs RRSP"
    provinces =  [
        {
        'id'   : 1,    
        'name' : 'Ontario', 
        'taxBrackets' : [
                         {'name': '10k to 50k', 'id': 1},
                         {'name': '50k to 80k', 'id': 2},
                         {'name': '80k to 120k', 'id': 3},
                         {'name': '10k to 50k', 'id': 4} 
                        ]
                        },
        {
        'id'   : 1,    
        'name' : 'British Columbia', 
        'taxBrackets' : [  
                         {'name': '10k to 50k', 'id': 1},
                         {'name': '50k to 80k', 'id': 2},
                         {'name': '80k to 120k', 'id': 3},
                         {'name': '10k to 50k', 'id': 4} 
                        ]                        
                        },
    ]
}

@NgModule ({
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic() 
    .bootstrapModule(AppModule);
