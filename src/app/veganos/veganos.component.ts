import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import {Router, RouterLink} from "@angular/router";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  ModalController
} from "@ionic/angular/standalone";
import { FormulariosComponent } from "../formularios/formularios.component";
import { Receta } from "../modelos/receta";
import { RecetaService } from "../servicios/receta-service";
import { CommonModule } from '@angular/common';
import {Formulario2Component} from "../formulario2/formulario2.component";

@Component({
  selector: 'app-veganos',
  templateUrl: './veganos.component.html',
  styleUrls: ['./veganos.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    FormulariosComponent,
    CommonModule,
    IonContent,
    IonImg
  ]
})
export class VeganosComponent implements OnInit {
  recetas: Receta[] = [];

  constructor(private modalCtrl: ModalController, private receta: RecetaService, private router: Router) {}

  ngOnInit(): void {
    this.receta.consultarRecetas().subscribe({
      next: (data: Receta[]) => {
        this.recetas = data.filter(receta => receta.id_tipo === 2);
        },
      error: (err) => {
        console.error('Error al cargar recetas:', err);
      }
    });
  }

  async abrirFormulario() {
    const modal = await this.modalCtrl.create({
      component: Formulario2Component,
      componentProps: { titulo: 'Nueva Receta Vegana', idTipo: 2}
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
