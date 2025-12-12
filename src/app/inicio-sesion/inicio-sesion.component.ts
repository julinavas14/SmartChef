import { Component, OnInit } from '@angular/core';
import {IonButton, IonContent} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {Footer2Component} from "../footer2/footer2.component";
import {Header2Component} from "../header2/header2.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    RouterLink,
    Footer2Component,
    Header2Component,
    NgOptimizedImage
  ]
})
export class InicioSesionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
