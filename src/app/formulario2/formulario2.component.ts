import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IonicModule, ModalController} from "@ionic/angular";
import {RecetaService} from "../servicios/receta-service";
import {Camera, CameraResultType} from '@capacitor/camera';

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
export class Formulario2Component implements OnInit {
  @Input() titulo: string = 'Nueva Receta Con Proteína';

  img: any;

  nuevaReceta: any = {
    nombre: '',
    imagen: '',
    descripcion: '',
    idTipo: 2
  };

  ngOnInit() {
    this.initialiceCamera();
  }


  async initialiceCamera() {
    await Camera.requestPermissions({
      permissions: ['photos', 'camera']
    });
  }

   async takePhoto(){
    let photo = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64
    });

    this.img = `data:image/jpeg;base64,${photo.base64String}`;
    this.nuevaReceta.imagen = this.img;
  }

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
