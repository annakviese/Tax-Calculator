import { Component } from '@angular/core';
import { Input }    from './input';

@Component({
  moduleId: module.id,
  selector: 'input-form',
  templateUrl: 'input-form.component.html',
  
})
export class InputFormComponent {
  MarginalTaxRate = [0.36];
  model = new Input();
  submitted = false;

  onSubmit() {
       this.submitted = true; 
       //calculates After Tax Value
       this.model.tsfaAfterTax = this.model.DepositAmount * (1 - this.model.MarginalTaxRate);
       this.model.rrspAfterTax =  this.model.DepositAmount;
       //calculates Future Value in Todays Dollars
       this.model.rateOfReturn = (1 + this.model.ROI)/ (1 + this.model.Inflation) - 1;
       this.model.tsfaFutureValue = Math.round(this.model.tsfaAfterTax * Math.pow((1 + this.model.rateOfReturn),this.model.Years));
       this.model.rrspFutureValue =  Math.round(this.model.rrspAfterTax * Math.pow((1 + this.model.rateOfReturn),this.model.Years));
       //calculates Tax Paid Upon Withdrawal
       this.model.tsfaTaxPaid = 0;
       this.model.rrspTaxPaid = Math.round(this.model.rrspFutureValue * this.model.AvRetirenmentTax);
       //calculates Future Value at the End of the period
       this.model.tsfaEndValue = Math.round(this.model.tsfaFutureValue);
       this.model.rrspEndValue = Math.round(this.model.rrspFutureValue - this.model.rrspTaxPaid); 
    }

}

