import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-descripcion-modal',
  templateUrl: './descripcion-modal.page.html',
  styleUrls: ['./descripcion-modal.page.scss'],
})
export class DescripcionModalPage implements OnInit {

  constructor( public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
    }
}
