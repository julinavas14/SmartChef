import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PostresComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
