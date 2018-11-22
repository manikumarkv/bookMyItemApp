import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  billList: any[];

  constructor(public navCtrl: NavController) {
    this.billList = [];
  }

  createBill(name, amount, dueDate) {
    const newBillRef = [];
  }
}
