import Customer from "./customer";
import { Product } from "./product";

export default class Transaction {
    id: string;
    products: Array<Product>;
    totalAmount: number;
    paidWith: string;
    dueAmount: number;
    cstomerId: string;
    customer: Customer;
    transactionDate: Date;
}