import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {
  IonButton, IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg, IonItem, IonLabel, IonList,
  IonModal, IonTitle, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {MiToastComponent} from "../Mitoast/mi-toast.component";
import {FormulariosComponent} from "../formularios/formularios.component";
import {addIcons} from "ionicons";
import {gitCompareOutline} from "ionicons/icons";

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
export class AlimentoveganosComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {
    addIcons({gitCompareOutline})
  }

  ngOnInit() {}

  @ViewChild('miToast') miToast!: MiToastComponent;
  mostrarToast() {
    this.miToast.mostrar('¡Lista de la compra Creada!');
  }

  mostrarToastEliminar(){
    this.miToast.mostrar('Receta Eliminada');
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
        titulo: 'Editar Receta'
      }
    });

    modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'guardar') {
      console.log('Datos guardados:', data);
    }
  }

}
