import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {
  IonContent,
  IonSearchbar,
  IonText,
  IonToolbar
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    IonToolbar,
    IonSearchbar,
    FormsModule,
    IonContent,
    IonText,
  ]
})
export class BuscadorComponent  implements OnInit {
  constructor() {}

  ngOnInit() {}
}
