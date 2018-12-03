import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from "../item"
import  Product  from "../../app/models/product";
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
  selectedItems : Item[] = [];
  totalBill :number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.selectedItems = navParams.get('items');
   for(let i=0;i<this.selectedItems.length;i++)
   {
    this.totalBill=this.totalBill+this.selectedItems[i].quantity * this.selectedItems[i].product.unitMrp
   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateBillPage');
  }

}
