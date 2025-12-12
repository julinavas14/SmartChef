import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-comidabasura',
  templateUrl: './comidabasura.component.html',
  styleUrls: ['./comidabasura.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent]
})
export class ComidabasuraComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
