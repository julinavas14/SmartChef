import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import {IonButton, IonCard, IonCardHeader, IonCardTitle, IonImg, ModalController} from "@ionic/angular/standalone";
import {FormulariosComponent} from "../formularios/formularios.component";


@Component({
  selector: 'app-veganos',
  templateUrl: './veganos.component.html',
  styleUrls: ['./veganos.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, IonCard, IonCardHeader, IonCardTitle, IonImg, IonButton]
})

export class VeganosComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  async abrirFormulario() {
    const modal = await this.modalCtrl.create({
      component: FormulariosComponent,
      componentProps: {
        titulo: 'Nueva Receta'
      }
    });

    modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'guardar') {
      console.log('Datos guardados:', data);
    }
  }
}
