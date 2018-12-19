// import Customer from "./customer";
import { Customer } from "./index";
import ProductItem from "./productItem";

export default class Transaction {
  public id: string;
  public productItems: ProductItem[] = [];
  // public totalAmount: number;
  public paidWith: string;
  public dueAmount: number;
  public customerId: string;
  public customer: Customer;
  public transactionDate: Date;
  constructor() {}

  addProduct(Product: ProductItem): void {
    this.productItems.push(Product);
  }

  get totalAmount(): number {
    let totalAmount = 0;
    this.productItems.map(productItem => {
      totalAmount =
        totalAmount +
        productItem.product.getTotalWithDiscount(productItem.quantity);
    });
    return totalAmount;
  }

  get totalDiscount(): number {
    let totalAmount = 0;
    this.productItems.map(productItem => {
      totalAmount =
        totalAmount + productItem.product.getSavingAmount(productItem.quantity);
    });
    return totalAmount;
  }

  updateCustomer(customer: Customer) : void {
    this.customer = customer
  }
}
