import { Injectable } from "@angular/core";
import Product from "../app/models/product";
import { ProductsDbService } from '../services/dbServices/products.db.service'


@Injectable()
export class ProductsService {
  private products: Product[] = []
  private units: any[] = []
  constructor(public productDbService: ProductsDbService) {

  }


  Add(product: Product): Promise<any> {
    var promise = new Promise((resolve, reject) => {
      this.productDbService.Add(product).then(res => {
        this.products.push(product);
        resolve(product)
      }).catch(err => {
        reject(err)
      })
    });
    return promise;

  }

  Remove(id): Promise<any> {

    var promise = new Promise((resolve, reject) => {
      this.productDbService.Remove(id).then(succ => {
        this.products = this.products.filter(product => product.id !== id);
        resolve(succ)
      }).catch(err=> {
        reject(err)
      })
    });
    return promise;
    

  }

  Update(product): void {

    this.products.map(_product => {
      if (_product.id === product.id) {
        _product = product;
      }
    });
  }

  Get(id: string): Product {
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

  removeAll() {
    var promise = new Promise((resolve, reject) => {
      this.productDbService.removeAll(this.products).then(res => {
        this.products = []
        resolve([])
      }).catch(err => {
        reject(err)
      })
    });
    return promise;
  }
}
