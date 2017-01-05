export class Input {
  constructor(
    public MarginalTaxRate: number,
    public AvRetirenmentTax: number,
    public DepositAmount: number,
    public Years: number,
    public ROI: number, 
    public Inflation: number,
    public rrspAfterTax: number
  ) {  }
}