import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import {
  AlertController,
  IonButton, IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg, IonItem, IonLabel, IonList,
  IonModal, IonTitle, IonToolbar, ModalController, ToastController
} from "@ionic/angular/standalone";
import { MiToastComponent } from "../Mitoast/mi-toast.component";
import { FormulariosComponent } from "../formularios/formularios.component";
import { addIcons } from "ionicons";
import { gitCompareOutline } from "ionicons/icons";
import { Receta } from "../modelos/receta";
import { Router } from '@angular/router';
import {RecetaService} from "../servicios/receta-service";

@Component({
  selector: 'app-alimentoveganos',
  templateUrl: './alimentoveganos.component.html',
  styleUrls: ['./alimentoveganos.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonContent,
    IonImg,
    IonCard,
    IonCardHeader,
    IonButton,
    MiToastComponent,
    IonIcon,
    IonModal,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonList,
    IonLabel,
    IonItem
  ]
})
export class AlimentoveganosComponent implements OnInit {

  receta: Receta | null = null;

  constructor(
    private modalCtrl: ModalController,
    private recetaService: RecetaService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    addIcons({ gitCompareOutline });
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['receta']) {
      this.receta = navigation.extras.state['receta'] as Receta;
    }

    if (!this.receta) {
      console.warn('No se recibió receta. Podrías cargar por ID aquí más adelante.');
    }
  }

  async eliminarReceta() {
    if (!this.receta || !this.receta.id_receta) {
      await this.mostrarMensaje('Error: Receta no identificada');
      return;
    }

    this.recetaService.eliminarReceta(this.receta.id_receta).subscribe({
      next: async () => {
        await this.mostrarMensaje('Receta eliminada');
        this.router.navigate(['/veganos']);
      },
      error: async (err) => {
        console.error('Error al eliminar:', err);
        await this.mostrarMensaje('No se pudo eliminar la receta');
      }
    });
  }

  private async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }


  @ViewChild('miToast') miToast!: MiToastComponent;
  mostrarToast() {
    this.miToast.mostrar('¡Lista de la compra Creada!');
  }

  imagenCorazon: string = '../../assets/img/amor.png';
  imagenCorazonActivo: string = '../../assets/img/corazon.png';
  corazonActivo: boolean = false;

  cambiarCorazon() {
    this.corazonActivo = !this.corazonActivo;
    this.imagenCorazon = this.corazonActivo ? this.imagenCorazonActivo : '../../assets/img/amor.png';
  }

  AbrirReceta = false;
  AbrirIngredientes = false;

  setOpen(isOpen: boolean) {
    this.AbrirReceta = isOpen;
  }

  setOpenIngre(isOpen: boolean) {
    this.AbrirIngredientes = isOpen;
  }

  async abrirFormulario() {
    const modal = await this.modalCtrl.create({
      component: FormulariosComponent,
      componentProps: {
        titulo: 'Editar Receta',
        receta: this.receta
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'guardar') {
      console.log('Datos guardados:', data);
    }
  }
}
