import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCheckbox, IonContent,
  IonHeader,
  IonIcon,
  IonImg, IonItem, IonLabel, IonList,
  IonTitle, IonToggle, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {ModalExampleComponent} from "../modal-perfil/modal-perfil.component";
import {FormsModule} from "@angular/forms";
import {createOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    IonImg,
    IonHeader,
    IonTitle,
    RouterLink,
    IonIcon,
    IonButtons,
    IonButton,
    IonBackButton,
    IonToolbar,
    IonCheckbox,
    FormsModule,
    IonCard,
    IonItem,
    IonLabel,
    IonToggle,
    IonList,
    IonAvatar,
    IonContent
  ]
})
export class PerfilComponent implements OnInit {
  ngOnInit() {}

  nombre = 'Julián';
  apellido = 'Navas Medina';
  email = 'ejemplo@gmail.com';
  contrasena = '12345678';
  showPassword = false;
  hasAllergies = true;
  isEditing = false;
  message = '';

  getMaskedPassword() {
    return '•'.repeat(this.contrasena.length);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.message = this.isEditing ? '' : 'Perfil actualizado correctamente';
  }

  openModal() {
    console.log('Abriendo modal de edición...');
  }

}
