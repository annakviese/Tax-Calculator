import { Component } from '@angular/core';
import { Input }    from './input';

@Component({
  moduleId: module.id,
  selector: 'input-form',
  templateUrl: 'input-form.component.html',
  
})
export class InputFormComponent {
  MarginalTaxRate = [50000];
  model = new Input() ;
  submitted = false;

  onSubmit() {
       this.submitted = true; 
       this.results
       //calculates After Tax Value
       this.model.tsfaAfterTax = parseInt(this.model.DepositAmount) * (1 - parseFloat(this.model.MarginalTaxRate));
       this.model.rrspAfterTax =  parseInt(this.model.DepositAmount);
       //calculates Future Value in Todays Dollars
       this.model.tsfaFutureValue = parseInt(this.model.tsfaAfterTax) * ((parseInt(this.model.Years) * (1 + parseFloat(this.model.ROI));
       this.model.rrspFutureValue =  parseInt(this.model.rrspAfterTax) * ((parseInt(this.model.Years) * (1 + parseFloat(this.model.ROI));
       //calculates Tax Paid Upon Withdrawal
       this.model.tsfaTaxPaid = 0;
       this.model.rrspTaxPaid = parseInt(this.model.rrspFutureValue) * (parseFloat(this.model.AvRetirenmentTax));
       //calculates Future Value at the End of the period
       this.model.tsfaEndValue = parseInt(this.model.tsfaFutureValue);
       this.model.rrspEndValue = parseInt(this.model.rrspFutureValue) - (parseInt(this.model.rrspTaxPaid)); 
    }

}

