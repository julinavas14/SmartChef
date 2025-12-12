import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: 'modal-perfil.component.html',
  imports: [FormsModule, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, IonInput],
})
export class ModalExampleComponent {
  name!: string;
  apellido!: string;
  email!: string;
  contrasena!: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({
      nombre: this.name,
      apellido: this.apellido,
      email: this.email,
      contrasena: this.contrasena
    }, 'confirm');
  }

}
