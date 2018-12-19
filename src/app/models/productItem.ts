import Product from "./product";

export default class ProductItem {
  product: Product;
  quantity: number;
  editable: boolean;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.editable = false;
  }

  get finalPrice(): number {
      return this.product.getTotalWithDiscount(this.quantity)
  }
  get totalDiscount(): number {
      return this.product.getSavingAmount(this.quantity)
  }
}
