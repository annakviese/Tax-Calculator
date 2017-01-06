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
var input_1 = require('./input');
var InputFormComponent = (function () {
    function InputFormComponent() {
        this.MarginalTaxRate = [0.36];
        this.model = new input_1.Input();
        this.submitted = false;
    }
    InputFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //calculates After Tax Value
        this.model.tsfaAfterTax = this.model.DepositAmount * (1 - this.model.MarginalTaxRate);
        this.model.rrspAfterTax = this.model.DepositAmount;
        //calculates Future Value in Todays Dollars
        this.model.rateOfReturn = (1 + this.model.ROI) / (1 + this.model.Inflation) - 1;
        this.model.tsfaFutureValue = Math.round(this.model.tsfaAfterTax * Math.pow((1 + this.model.rateOfReturn), this.model.Years));
        this.model.rrspFutureValue = Math.round(this.model.rrspAfterTax * Math.pow((1 + this.model.rateOfReturn), this.model.Years));
        //calculates Tax Paid Upon Withdrawal
        this.model.tsfaTaxPaid = 0;
        this.model.rrspTaxPaid = Math.round(this.model.rrspFutureValue * this.model.AvRetirenmentTax);
        //calculates Future Value at the End of the period
        this.model.tsfaEndValue = Math.round(this.model.tsfaFutureValue);
        this.model.rrspEndValue = Math.round(this.model.rrspFutureValue - this.model.rrspTaxPaid);
    };
    InputFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-form',
            styleUrls: ['css/style.css'],
            templateUrl: 'input-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], InputFormComponent);
    return InputFormComponent;
}());
exports.InputFormComponent = InputFormComponent;
//# sourceMappingURL=input-form.component.js.map