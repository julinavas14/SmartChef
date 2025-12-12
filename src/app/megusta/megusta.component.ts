import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {IonCard, IonCardHeader, IonCardTitle, IonContent, IonImg} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-megusta',
  templateUrl: './megusta.component.html',
  styleUrls: ['./megusta.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    RouterLink
  ]
})
export class MegustaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
