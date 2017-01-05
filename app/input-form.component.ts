import { Component } from '@angular/core';
import { Input }    from './input';

@Component({
  moduleId: module.id,
  selector: 'input-form',
  templateUrl: 'input-form.component.html',
  
})
export class InputFormComponent {
  MarginalTaxRate = [50000];
  model = new Input();
  submitted = false;

  onSubmit() {
       this.submitted = true; 
       //calculates After Tax Value
       this.model.tsfaAfterTax = this.model.DepositAmount * (1 - (this.model.MarginalTaxRate));
       this.model.rrspAfterTax =  this.model.DepositAmount;
       //calculates Future Value in Todays Dollars
       this.model.tsfaFutureValue = this.model.tsfaAfterTax * (this.model.Years * (1 + this.model.ROI));
       this.model.rrspFutureValue =  this.model.rrspAfterTax * (this.model.Years * (1 + this.model.ROI));
       //calculates Tax Paid Upon Withdrawal
       this.model.tsfaTaxPaid = 0;
       this.model.rrspTaxPaid = this.model.rrspFutureValue * this.model.AvRetirenmentTax;
       //calculates Future Value at the End of the period
       this.model.tsfaEndValue = this.model.tsfaFutureValue;
       this.model.rrspEndValue = this.model.rrspFutureValue - this.model.rrspTaxPaid; 
    }

}

