import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader, IonCardTitle
} from "@ionic/angular/standalone";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    RouterLink
  ]
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
