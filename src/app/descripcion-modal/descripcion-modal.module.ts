import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionModalPageRoutingModule } from './descripcion-modal-routing.module';

import { DescripcionModalPage } from './descripcion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionModalPageRoutingModule
  ],
  declarations: [DescripcionModalPage]
})
export class DescripcionModalPageModule {}
