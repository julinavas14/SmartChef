import { Component, OnInit } from '@angular/core';
import {IonButton, IonButtons, IonImg, IonToolbar} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonButton,
    IonButtons,
    IonToolbar,
    RouterLink
  ]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
