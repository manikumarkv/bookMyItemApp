import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from "../item";
import { CustomersService } from '../../services/customers.service';
import  Customer  from '../../app/models/customer';
/**
 * Generated class for the GenerateBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-generate-bill',
  templateUrl: 'generate-bill.html',
})
export class GenerateBillPage {
  public customerlist: Customer[]=[];
  selectedCustomer: boolean = true;
  customer: Customer;
  selectedItems : Item[] = [];
  totalBill :number = 0;
  fullname: string;
 
  address : string;
  phnumber: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public customerService: CustomersService) {
   this.selectedItems = navParams.get('items');
   for(let i=0;i<this.selectedItems.length;i++)
   {
    this.totalBill=this.totalBill+this.selectedItems[i].quantity * this.selectedItems[i].product.unitMrp
   }
   this.customerlist=customerService.GetAll()
  }

  selectCustomer(val)
  {
  this.selectedCustomer = false
  this.customer = val
 }

changeCustomer()
{
  this.selectedCustomer= true;
  this.customer = null
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateBillPage');
  }

}
