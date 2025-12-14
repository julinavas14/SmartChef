import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";

import { Receta } from '../modelos/receta';
import { RecetaService } from '../servicios/receta-service';

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
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar
  ]
})
export class FormularioEditarComponent implements OnInit {

  @Input() titulo: string = 'Editar Receta';
  @Input() receta!: Receta;

  nombre: string = '';
  imagen: string = '';
  descripcion: string = '';
  id_tipo: number = 1;

  constructor(private modalCtrl: ModalController, private recetaService: RecetaService) {}

  ngOnInit() {
    if (this.receta) {
      this.nombre = this.receta.nombre || '';
      this.imagen = this.receta.imagen || '';
      this.descripcion = this.receta.descripcion || '';
      this.id_tipo = this.receta.id_tipo || 1;
    }
  }

  onGuardar() {
    if (!this.nombre?.trim()) {
      alert('El nombre es obligatorio');
      return;
    }

    const datos = {
      nombre: this.nombre.trim(),
      imagen: this.imagen?.trim() || '',
      descripcion: this.descripcion?.trim() || '',
      idTipo: this.id_tipo
    };

    console.log('ID de la receta:', this.receta.id_receta);
    console.log('Datos enviados:', datos);

    if (this.receta?.id_receta) {
      this.recetaService.modificarReceta(this.receta.id_receta, datos).subscribe({
        next: (recetaActualizada) => {
          console.log('Receta actualizada:', recetaActualizada);
          this.modalCtrl.dismiss(recetaActualizada, 'guardar');
        },
        error: (err) => {
          console.error('Error al modificar:', err);
          alert('Error al guardar los cambios. Puede que el nombre ya exista.');
        }
      });
    } else {
      alert('Error: No se encontró el ID de la receta');
    }
  }

  onCancelar() {
    this.modalCtrl.dismiss(null, 'cancelar');
  }
}
