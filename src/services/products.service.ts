import { Injectable } from "@angular/core";
import Product from "../app/models/product";
import { ProductProvider } from "../providers/product/product";


@Injectable()
export class ProductsService {
  private products: Product[] = []
  private units: any[] = []
  constructor(public productDbService: ProductProvider) {

  }


  Add(product: Product): Promise<any> {
    var promise = new Promise((resolve, reject) => {
      this.productDbService.addProduct(product).then(res => {
        this.products.push(product);
        resolve(product)
      }).catch(err => {
        reject(err)
      })
    });
    return promise;

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

  editProduct(product: Product) {
    this.products.map(pro => {
      if (pro._id == product._id) {
        pro = product
        return pro
      }
      return pro;
    })
  }
}
