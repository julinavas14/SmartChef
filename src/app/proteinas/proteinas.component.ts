import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-proteinas',
  templateUrl: './proteinas.component.html',
  styleUrls: ['./proteinas.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent]
})
export class ProteinasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
