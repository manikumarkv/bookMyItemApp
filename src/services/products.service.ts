import { Injectable } from "@angular/core";
import { Product } from "bill-app-models";
import { Units } from "../app/constants";

@Injectable()
export class ProductsService {
  private products: Product[] = [new Product(1,'a', 'a', 'gms', 100, 10), new Product(1,'a', 'a', 'gms', 100, 10), new Product(1,'a', 'a', 'gms', 100, 10), new Product(1,'a', 'a', 'gms', 100, 10)];
  private units: any[] = [
    { text: "KG(s)", value: "1000", unit: Units.Weight },
    { text: "grams", value: "1", unit: Units.Weight },
    { text: "piece", value: "1", unit: Units.Pieces },
    { text: "packet", value: "10", unit: Units.Pieces },
    { text: "liter(s)", value: "1", unit: Units.Liter }
  ];

  Add(product): void {
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
