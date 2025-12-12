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
    selector: 'app-formulario-anadir-ingrediente',
    templateUrl: './formulario-anadir-ingrediente.component.html',
    styleUrls: ['./formulario-anadir-ingrediente.component.scss'],
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
export class FormularioAnadirIngredienteComponent  implements OnInit {

  @Input() titulo: string = 'Formulario';
  nombre: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onGuardar() {
    this.modalCtrl.dismiss({ nombre: this.nombre}, 'Guardar');
  }

  onCancelar() {
    this.modalCtrl.dismiss(null, 'Cancelar');
  }

}
