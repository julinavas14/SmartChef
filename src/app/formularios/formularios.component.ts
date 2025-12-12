import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent, IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonContent,
    FormsModule,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader
  ]
})
export class FormulariosComponent  implements OnInit {

  @Input() titulo: string = 'Formulario';
  nombre: string = '';
  imagen: string = '';
  descripcion: string = '';
  tipo: number [] = [1,2,3,4];
  ingredientes: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onGuardar() {
    this.modalCtrl.dismiss({ nombre: this.nombre, imagen: this.imagen, descripcion: this.descripcion, tipo: this.tipo, ingredientes: this.ingredientes}, 'Guardar');
  }

  onCancelar() {
    this.modalCtrl.dismiss(null, 'Cancelar');
  }

}
