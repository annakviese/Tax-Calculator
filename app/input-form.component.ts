import { Component } from '@angular/core';
import { Input }    from './input';

@Component({
  moduleId: module.id,
  selector: 'input-form',
  templateUrl: 'input-form.component.html',
  
})
export class InputFormComponent {
  TaxBracket = [15000, 50000];
  model = new Input(15000, 0.35, 500, 5, 0.5, 0.1) ;
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

