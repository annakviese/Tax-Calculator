import { Component } from '@angular/core';


@Component ({
    selector: 'provinces',
    template: `<h1>{{title}}</h1>     
                <ul>
                    <li *ngFor="let province of provinces">
                        <p>{{province.name}} </p>
                        <select>
                            <ng-container *ngFor="let item of province.taxBrackets">               
                            <option>{{item.name}}</option>
                            </ng-container>
                        </select>
                    </li>
                </ul>`
})
export class ProvincesComponent{
    provinces =  [
        {
        'id'   : 1,    
        'name' : 'Ontario', 
        'taxBrackets' : [
                         {'name': 'up to $42,201', 'id': 1},
                         {'name': '$42,201 - $45,916', 'id': 2},
                         {'name': '$45,916 - $74,313', 'id': 3},
                         {'name': '$74,313 up to $84,404', 'id': 4},
                         {'name': '$84,404 up to $87,559', 'id': 5},
                         {'name': '$87,559 up to $91,831', 'id': 6},
                         {'name': '$91,831 up to $142,353', 'id': 7},
                         {'name': '$142,353 up to $150,000', 'id': 8}
                         
                        ]
                        },
        {
        'id'   : 1,    
        'name' : 'British Columbia', 
        'taxBrackets' : [  
                         {'name': 'up to $38,898', 'id': 1},
                         {'name': '$38,898 - $45,916', 'id': 2},
                         {'name': ' $77,797 - $89,320', 'id': 3},
                         {'name': '$89,320 - $91,831', 'id': 4},
                         {'name': '$91,831 - $108,460', 'id': 5},
                         {'name': '$108,460 - $142,353', 'id': 6},
                         {'name': '$142,353 - $202,800', 'id': 7},
                         {'name': 'over $202,800', 'id': 8} 
                        ]                        
                        },
    ]

}