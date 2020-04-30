import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DescripcionModalPage } from '../descripcion-modal/descripcion-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController, public viewCtrl: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: DescripcionModalPage
    });
    return await modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
    }
}
