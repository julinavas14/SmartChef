import { Component, OnInit } from '@angular/core';

import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {Footer2Component} from "../footer2/footer2.component";
import {Header2Component} from "../header2/header2.component";

@Component({
    selector: 'app-crear-cuenta',
    templateUrl: './crear-cuenta.component.html',
    styleUrls: ['./crear-cuenta.component.scss'],
    standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonList,
    RouterLink,
    IonLabel,
    Footer2Component,
    Header2Component
  ]
})
export class CrearCuentaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
