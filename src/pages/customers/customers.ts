import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Customer from '../../app/models/customer';
import { CustomersService } from '../../services/customers.service';
import { AddCustomerPage } from './add-customer/add-customer';


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
