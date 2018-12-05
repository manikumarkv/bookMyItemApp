import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Item } from "../item";
import { Transaction } from "../../app/models";

/**
 * Generated class for the GenerateBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-generate-bill",
  templateUrl: "generate-bill.html"
})
export class GenerateBillPage {
  transaction: Transaction;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transaction = navParams.get("transaction");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GenerateBillPage");
  }
}
