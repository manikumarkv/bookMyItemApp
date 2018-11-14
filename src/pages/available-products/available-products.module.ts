import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableProductsPage } from './available-products';

@NgModule({
  declarations: [
    AvailableProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableProductsPage),
  ],
})
export class AvailableProductsPageModule {}
