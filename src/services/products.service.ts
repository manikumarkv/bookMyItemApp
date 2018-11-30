import { Injectable } from "@angular/core";
import Product from "../app/models/product";
import { Units } from "../app/constants";

@Injectable()
export class ProductsService {
  private products: Product[] = []
  private units :any[] =[]
  // private units: any[] = [
  //   { text: "KG(s)", value: "1000", unit: Units.Weight },
  //   { text: "grams", value: "1", unit: Units.Weight },
  //   { text: "piece", value: "1", unit: Units.Pieces },
  //   { text: "packet", value: "10", unit: Units.Pieces },
  //   { text: "liter(s)", value: "1", unit: Units.Liter }
  // ];

  Add(product: Product): void {
    this.products.push(product);
  }

  Remove(id): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  Update(product): void {
    this.products.map(_product => {
      if (_product.id === product.id) {
        _product = product;
      }
    });
  }

  Get(id: number): Product {
    return this.products.filter(product => product.id === id)[0];
  }

  GetAll(): Product[] {
    return this.products;
  }
  GetUnits(): any[] {
    return this.units;
  }
}
