import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
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
import {FormulariosComponent} from "../formularios/formularios.component";
import {Formulario4Component} from "../formulario4/formulario4.component";

@Component({
  selector: 'app-comidabasura',
  templateUrl: './comidabasura.component.html',
  styleUrls: ['./comidabasura.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonImg, NgForOf, RouterLink]
})
export class ComidabasuraComponent  implements OnInit {
  recetas: Receta[] = [];

  constructor(private modalCtrl: ModalController, private receta: RecetaService) {}

  ngOnInit(): void {
    this.receta.consultarRecetas().subscribe({
      next: (data: Receta[]) => {
        this.recetas = data.filter(receta => receta.id_tipo === 4);
      },
      error: (err) => {
        console.error('Error al cargar recetas:', err);
      }
    });
  }

  async abrirFormulario() {
    const modal = await this.modalCtrl.create({
      component: Formulario4Component,
      componentProps: { titulo: 'Nueva Receta Vegana', idTipo: 4}
    });

    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'guardar') {
      console.log('Receta guardada:', data);
      this.ngOnInit();
    }
  }
}
