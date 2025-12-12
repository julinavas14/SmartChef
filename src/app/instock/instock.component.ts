import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {IonButton, IonCheckbox, IonContent, IonItem, IonList, ModalController} from "@ionic/angular/standalone";
import {FormularioAnadirIngredienteComponent} from "../formulario-anadir-ingrediente/formulario-anadir-ingrediente.component";

@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonContent,
    IonList,
    IonItem,
    IonCheckbox,
    IonButton
  ]
})
export class InstockComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async abrirFormularioIngrediente() {
    const modal = await this.modalCtrl.create({
      component: FormularioAnadirIngredienteComponent,
      componentProps: {
        titulo: 'Agregar Ingrediente',
      }
    });

    modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'guardar') {
      console.log('Datos guardados:', data);
    }
  }
}
