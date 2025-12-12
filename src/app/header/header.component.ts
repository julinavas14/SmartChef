import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar, NavController
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonImg,
    IonButton,
    IonButtons,
    RouterLink
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
