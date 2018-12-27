import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import Customer from '../../app/models/customer';
import { CustomersService } from '../../services/customers.service';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AddCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage implements OnInit {
  fname: string;
  lname: string;
  phnumber: number;
  address: string;
  customer: Customer
  constructor(public navCtrl: NavController, public navParams: NavParams, public customerService: CustomersService, public toastCtrl: ToastController) {
    this.customer = navParams.get("customer");
    if (this.customer != undefined) {
      this.fname = this.customer.firstName;
      this.lname = this.customer.lastName;
      this.phnumber = this.customer.phoneNumber;
      this.address = this.customer.address;

    }
  }
  ngOnInit() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }
  addCustomer(fname, lname, phnumber, address) {
    if (this.customer) {
      this.customer.firstName = fname;
      this.customer.lastName = lname;
      this.customer.phoneNumber = phnumber;
      this.address = address
      this.customerService.editCustomer(this.customer)
      const toast = this.toastCtrl.create({
        message: 'details edited',
        duration: 600,
        position: 'top'
      });
      toast.present();
      this.navCtrl.pop()
    }
    else {
      this.customerService.Add(
        new Customer(Math.random().toString(), fname, lname, phnumber, address)
      );
      const toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000
      });
      toast.present();
    }
    this.fname = "";
    this.lname = "";
    this.phnumber = null;
    this.address = "";
  }
}
