import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle, IonToolbar, ModalController
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-formulario-editar',
    templateUrl: './formulario-editar.component.html',
    styleUrls: ['./formulario-editar.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        IonButton,
        IonButtons,
        IonContent,
        IonHeader,
        IonInput,
        IonItem,
        IonLabel,
        IonTitle,
        IonToolbar
    ]
})
export class FormularioEditarComponent  implements OnInit {

  @Input() titulo: string = 'Formulario';
  nombre: string = '';
  imagen: string = '';
  descripcion: string = '';
  tipo: number [] = [1,2,3,4];
  ingredientes: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onGuardar() {
    this.modalCtrl.dismiss({ nombre: this.nombre, imagen: this.imagen, descripcion: this.descripcion, tipo: this.tipo, ingredientes: this.ingredientes }, 'Guardar');
  }

  onCancelar() {
    this.modalCtrl.dismiss(null, 'Cancelar');
  }
}
