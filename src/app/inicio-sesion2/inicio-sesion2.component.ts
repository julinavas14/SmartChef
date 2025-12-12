import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {IonButton, IonContent, IonInput, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {Header2Component} from "../header2/header2.component";

@Component({
    selector: 'app-inicio-sesion2',
    templateUrl: './inicio-sesion2.component.html',
    styleUrls: ['./inicio-sesion2.component.scss'],
    standalone: true,
  imports: [
    FooterComponent,
    IonButton,
    IonContent,
    RouterLink,
    IonList,
    IonItem,
    IonInput,
    Header2Component,
    IonLabel
  ]
})
export class InicioSesion2Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
