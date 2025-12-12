import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {
  IonButton, IonButtons,
  IonContent,
  IonDatetime, IonHeader,
  IonInput,
  IonItem, IonModal, IonTitle, IonToolbar,
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  imports: [
    HeaderComponent,
    IonContent,
    IonItem,
    FormsModule,
    IonDatetime,
    IonInput,
    IonButton,
    FooterComponent,
    IonModal,
    IonHeader,
    IonButtons,
    IonToolbar,
    IonTitle
  ]
})
export class CalendarioComponent {
  @ViewChild(IonModal) modal!: IonModal;

  constructor() {}

  addEvent() {

    }
  message = 'Aquí se muestran tus recetas';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'Cancelar');
  }

  confirm() {
    this.modal.dismiss(this.name, 'Confirmar');
  }

}
