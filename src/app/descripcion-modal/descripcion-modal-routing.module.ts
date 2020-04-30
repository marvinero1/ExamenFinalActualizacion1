import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionModalPage } from './descripcion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionModalPageRoutingModule {}
