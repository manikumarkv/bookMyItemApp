import { Product } from "../app/models";

export class Item {
    product: Product
    quantity: number
    constructor(product, quantity) {
        this.product = product
        this.quantity = quantity
    }
}