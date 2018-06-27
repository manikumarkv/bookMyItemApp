import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  billList: AngularFireList<any>;

  constructor(
    public navCtrl: NavController,
    public afDatabase: AngularFireDatabase,    
  ) {
    this.billList = afDatabase.list("/bills");
  }

  createBill(name, amount, dueDate) {
    const newBillRef = this.billList.push({});
    console.log("11", this.billList);
    newBillRef
      .set({
        name: name,
        amount: amount,
        dueDate: dueDate,
        paid: false,
        id: newBillRef.key
      })
      .then(
        newBill => {
          //this.navCtrl.pop();
          console.log("22", newBill);
        },
        error => {
          console.log(error);
        }
      );
  }
  
}
