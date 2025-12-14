import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  ModalController
} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";
import {Receta} from "../modelos/receta";
import {RecetaService} from "../servicios/receta-service";
import {Router, RouterLink} from "@angular/router";
import {Formulario3Component} from "../formulario3/formulario3.component";

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonImg,
    NgForOf,
    RouterLink
  ]
})
export class PostresComponent  implements OnInit {
  recetas: Receta[] = [];

  constructor(private modalCtrl: ModalController, private receta: RecetaService, private router: Router) {}

  ngOnInit(): void {
    this.receta.consultarRecetas().subscribe({
      next: (data: Receta[]) => {
        this.recetas = data.filter(receta => receta.id_tipo === 3);
      },
      error: (err) => {
        console.error('Error al cargar recetas:', err);
      }
    });
  }

  async abrirFormulario() {
    const modal = await this.modalCtrl.create({
      component: Formulario3Component,
      componentProps: { titulo: 'Nueva Receta Vegana', idTipo: 3}
    });

    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'guardar') {
      console.log('Receta guardada:', data);
      this.ngOnInit();
    }
  }

  abrirDetalle(receta: Receta) {
    this.router.navigate(['/alimentoveganos'], {
      state: { receta }
    });
  }

}
