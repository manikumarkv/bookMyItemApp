// import Customer from "./customer";
import { Customer, Product } from './index';


export default class Transaction {
    public id: string;
    public products: Product[];
    public totalAmount: number;
    public paidWith: string;
    public dueAmount: number;
    public customerId: string;
    public customer: Customer;
    public transactionDate: Date;
    constructor() {
       
    }

    addProduct(Product: Product):void {
        this.products.push(Product)
    }
}