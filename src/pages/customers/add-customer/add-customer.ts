import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import Customer from '../../../app/models/customer';
import { CustomersService } from '../../../services/customers.service';
import { ToastController } from 'ionic-angular';
import { Guid } from "../../../app/models/guid";
import { AppUtilsService } from "../../../services/utils/app.utils.service";


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
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public customerService: CustomersService, 
    public toastCtrl: ToastController,
    public appUtils: AppUtilsService) {
    this.customer = navParams.get("customer");
    if (this.customer != undefined) {
      this.customerService.Get(this.customer._id).then(succ=> {
        this.fname = this.customer.firstName;
        this.lname = this.customer.lastName;
        this.phnumber = this.customer.phoneNumber;
        this.address = this.customer.address;
      })
      

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
      this.customerService.Update(this.customer).then(succ=> {
        this.appUtils.showToaster("customer updated")
      })
      
      this.navCtrl.pop()
    }
    else {
      this.customerService.Add(
        new Customer(Guid.NewGuid(), fname, lname, phnumber, address)
      ).then(succ=> {
        this.appUtils.showToaster("customer created successfully")
      })
      
    }
    this.fname = "";
    this.lname = "";
    this.phnumber = null;
    this.address = "";
  }
}
