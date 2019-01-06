import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Customer from '../../app/models/customer';
import { CustomersService } from '../../services/customers.service';
import { AddCustomerPage } from '../add-customer/add-customer';
/**
 * Generated class for the CustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage implements OnInit {
  public customerlist: Customer[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public customerService: CustomersService) {
  }

  ngOnInit() {
    this.customerService.GetAll().then(succ=> {
      this.customerlist = succ;
    })
  }
  
  editCustomer(customer) {
    this.navCtrl.push(AddCustomerPage, {
      customer: customer
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }
  navigateToNew() {
    this.navCtrl.push(AddCustomerPage);
  }

}
