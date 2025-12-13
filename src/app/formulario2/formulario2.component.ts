import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IonicModule, ModalController} from "@ionic/angular";
import {RecetaService} from "../servicios/receta-service";

@Component({
    selector: 'app-formulario2',
    templateUrl: './formulario2.component.html',
    styleUrls: ['./formulario2.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        IonicModule
    ]
})
export class Formulario2Component{
  @Input() titulo: string = 'Nueva Receta Con Proteína';

  nuevaReceta: any = {
    nombre: '',
    imagen: '',
    descripcion: '',
    ingredientesTexto: '',
    idTipo: 2
  };


  constructor(private modalCtrl: ModalController, private recetaService: RecetaService) {}

  onCancelar() {
    this.modalCtrl.dismiss(null, 'cancelar');
  }

  onGuardar() {
    if (!this.nuevaReceta.nombre.trim() || !this.nuevaReceta.descripcion.trim()) {
      alert('Nombre y descripción son obligatorios');
      return;
    }

    const datosEnviar = {
      nombre: this.nuevaReceta.nombre.trim(),
      imagen: this.nuevaReceta.imagen,
      descripcion: this.nuevaReceta.descripcion,
      idTipo: this.nuevaReceta.idTipo
    };

    this.recetaService.crearReceta(datosEnviar).subscribe({
      next: (respuesta) => {
        console.log('Receta creada con éxito:', respuesta);
        this.modalCtrl.dismiss(respuesta, 'guardar');
      },
      error: (err) => {
        console.error('Error al crear receta:', err);
        alert('Error al guardar. Revisa consola o conexión.');
      }
    });
  }

}
