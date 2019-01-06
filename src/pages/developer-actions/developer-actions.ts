import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../services/products.service';
import { Product, Customer } from '../../app/models';
import { Guid } from '../../app/models/guid';
import { ProductProvider } from '../../providers/product/product';
import { CustomersService } from '../../services/customers.service';

/**
 * Generated class for the DeveloperActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-developer-actions',
  templateUrl: 'developer-actions.html',
})
export class DeveloperActionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public productService: ProductsService,
    public customerService: CustomersService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeveloperActionsPage');
  }

  addProducts() {
    this.productService.Add(new Product(Guid.NewGuid(), 'Dosa', 'DOSA', 'piece', 50, 5))
    this.productService.Add(new Product(Guid.NewGuid(), 'Idly', 'DOSA', 'piece', 60, 5))
    this.productService.Add(new Product(Guid.NewGuid(), 'Vada', 'DOSA', 'piece', 70, 5))
    this.productService.Add(new Product(Guid.NewGuid(), 'Upma', 'DOSA', 'piece', 80, 5))
    this.productService.Add(new Product(Guid.NewGuid(), 'Set Dosa', 'DOSA', 'piece', 40, 5))

  }

  deleteAllProducts() {
    this.productService.removeAll()
  }

  addCustomers() {
    this.customerService.Add(new Customer(Guid.NewGuid(), 'Mani', 'Kumar', 121212, 'addres1'));
    this.customerService.Add(new Customer(Guid.NewGuid(), 'Sai', 'Kumar', 121555212, 'addres1'));
    this.customerService.Add(new Customer(Guid.NewGuid(), 'Nagesh', 'Kumar', 6666, 'addres1'));
    this.customerService.Add(new Customer(Guid.NewGuid(), 'yamini', 'Kumar', 8888, 'addres1'));

  }
  deleteCustomers() {
    this.customerService.removeAll()
  }

}
