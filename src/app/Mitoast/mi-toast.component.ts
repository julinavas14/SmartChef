import {Component} from '@angular/core';
import {ToastController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-Mitoast',
  templateUrl: './mi-toast.component.html',
  styleUrls: ['./mi-toast.component.scss'],
  standalone: true,
  imports: []
})
export class MiToastComponent {
  constructor(private toastController: ToastController) {}

  async mostrar(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'bottom',
      color: 'primary',
    });
    await toast.present();
  }
}
