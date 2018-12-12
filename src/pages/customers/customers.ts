import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Customer from '../../app/models/customer';
import { CustomersService } from '../../services/customers.service';
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
    this.customerlist = this.customerService.GetAll()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }

}
