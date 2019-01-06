import { Injectable } from "@angular/core";

import { ToastController } from "ionic-angular";


@Injectable()
export class AppUtilsService {
  
  constructor(public toster: ToastController) {

  }

  showToaster(message: string): void{
    const toaster = this.toster.create({
        message: message,
        duration: 1000,
        position: 'top'
      });
      toaster.present();
  }
}
