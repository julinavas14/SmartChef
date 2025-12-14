import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
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
import {NgForOf} from "@angular/common";
import {Receta} from "../modelos/receta";
import {RecetaService} from "../servicios/receta-service";
import {FormulariosComponent} from "../formularios/formularios.component";

@Component({
  selector: 'app-proteinas',
  templateUrl: './proteinas.component.html',
  styleUrls: ['./proteinas.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonImg, NgForOf, RouterLink]
})
export class ProteinasComponent  implements OnInit {
  recetas: Receta[] = [];

  constructor(private modalCtrl: ModalController, private receta: RecetaService, private router: Router) {}

  ngOnInit(): void {
    this.receta.consultarRecetas().subscribe({
      next: (data: Receta[]) => {
        this.recetas = data.filter(receta => receta.id_tipo === 1);
      },
      error: (err) => {
        console.error('Error al cargar recetas:', err);
      }
    });
  }

  async abrirFormulario() {
    const modal = await this.modalCtrl.create({
      component: FormulariosComponent,
      componentProps: { titulo: 'Nueva Receta Con Proteína'}
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
