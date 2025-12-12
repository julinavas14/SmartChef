import { Component, OnInit } from '@angular/core';
import {IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
    selector: 'app-header2',
    templateUrl: './header2.component.html',
    styleUrls: ['./header2.component.scss'],
    standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader
  ]
})
export class Header2Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
