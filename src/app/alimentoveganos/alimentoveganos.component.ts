import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import {
  AlertController,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  ModalController,
  ToastController,
  IonCheckbox,
  IonSearchbar,
  IonInput
} from "@ionic/angular/standalone";
import { MiToastComponent } from "../Mitoast/mi-toast.component";
import { addIcons } from "ionicons";
import { gitCompareOutline } from "ionicons/icons";
import { Receta } from "../modelos/receta";
import { Router } from '@angular/router';
import { RecetaService } from "../servicios/receta-service";
import { CommonModule } from "@angular/common";
import { FormularioEditarComponent } from "../formulario-editar/formulario-editar.component";
import { FormsModule } from '@angular/forms';
import { Ingrediente } from "../modelos/ingrediente";

interface IngredienteSeleccionado {
  ingrediente: Ingrediente;
  seleccionado: boolean;
  cantidad: string;
}

@Component({
  selector: 'app-alimentoveganos',
  templateUrl: './alimentoveganos.component.html',
  styleUrls: ['./alimentoveganos.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonContent,
    IonImg,
    IonCard,
    IonCardHeader,
    IonButton,
    CommonModule,
    MiToastComponent,
    IonIcon,
    IonModal,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonList,
    IonLabel,
    IonItem,
    IonCheckbox,
    IonSearchbar,
    IonInput,
    FormsModule
  ]
})
export class AlimentoveganosComponent implements OnInit {

  receta: Receta = {
    id_receta: undefined,
    nombre: undefined,
    imagen: undefined,
    descripcion: undefined,
    id_tipo: undefined,
    ingredientes: []
  };

  ingredientesDisponibles: IngredienteSeleccionado[] = [];
  ingredientesFiltrados: IngredienteSeleccionado[] = [];
  AbrirAgregarIngredientes = false;
  cargandoIngredientes = false;

  constructor(
    private modalCtrl: ModalController,
    private recetaService: RecetaService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    addIcons({ gitCompareOutline });
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['receta']) {
      this.receta = navigation.extras.state['receta'] as Receta;
    }

    if (!this.receta.nombre) {
      console.warn('No se recibió receta completa.');
    }
  }

  async eliminarReceta() {
    if (!this.receta || !this.receta.id_receta) {
      await this.mostrarMensaje('Error: Receta no identificada');
      return;
    }

    this.recetaService.eliminarReceta(this.receta.id_receta).subscribe({
      next: async () => {
        await this.mostrarMensaje('Receta eliminada');
        this.router.navigate(['/home']);
      },
      error: async (err) => {
        console.error('Error al eliminar:', err);
        await this.mostrarMensaje('No se pudo eliminar la receta');
      }
    });
  }

  private async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  @ViewChild('miToast') miToast!: MiToastComponent;
  mostrarToast() {
    this.miToast.mostrar('¡Lista de la compra Creada!');
  }

  imagenCorazon: string = '../../assets/img/amor.png';
  imagenCorazonActivo: string = '../../assets/img/corazon.png';
  corazonActivo: boolean = false;

  cambiarCorazon() {
    this.corazonActivo = !this.corazonActivo;
    this.imagenCorazon = this.corazonActivo ? this.imagenCorazonActivo : '../../assets/img/amor.png';
  }

  AbrirReceta = false;
  AbrirIngredientes = false;

  setOpen(isOpen: boolean) {
    this.AbrirReceta = isOpen;
  }

  setOpenIngre(isOpen: boolean) {
    this.AbrirIngredientes = isOpen;
  }

  async abrirFormulario() {
    if (!this.receta?.id_receta) {
      alert('No se puede editar: receta sin ID');
      return;
    }

    const modal = await this.modalCtrl.create({
      component: FormularioEditarComponent,
      componentProps: {
        titulo: 'Editar Receta',
        receta: this.receta
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'guardar' && data) {
      this.receta = data;
      await this.mostrarMensaje('Receta actualizada correctamente');
    }
  }


  async abrirAgregarIngredientes() {
    this.cargandoIngredientes = true;
    this.AbrirAgregarIngredientes = true;

    this.ingredientesDisponibles = [];
    this.ingredientesFiltrados = [];

    this.recetaService.obtenerTodosIngredientes().subscribe({
      next: (ingredientes: Ingrediente[]) => {
        if (!ingredientes || ingredientes.length === 0) {
          this.mostrarMensaje('No hay ingredientes disponibles');
          this.cargandoIngredientes = false;
          return;
        }
        this.ingredientesDisponibles = ingredientes.map(i => {
          const existente = this.receta.ingredientes?.find(ing => {
            const nombreReceta = ing.trim().toLowerCase();
            const nombreIng = i.nombre_ingrediente?.trim().toLowerCase() || '';
            const soloNombre = nombreReceta.replace(/^\d+\s*\w*\s*/, '').trim();
            return soloNombre === nombreIng;
          });

          return {
            ingrediente: i,
            seleccionado: !!existente,
            cantidad: existente ? existente.trim().split(' ', 1)[0] || '' : ''
          };
        });

        this.ingredientesFiltrados = [...this.ingredientesDisponibles];
        this.cargandoIngredientes = false;
      },
      error: (err) => {
        console.error('Error cargando ingredientes:', err);
        this.mostrarMensaje('Error al cargar los ingredientes');
        this.cargandoIngredientes = false;
      }
    });
  }

  buscarIngredientes(event: any) {
    const termino = (event.target.value || '').trim().toLowerCase();
    if (!termino) {
      this.ingredientesFiltrados = [...this.ingredientesDisponibles];
      return;
    }
    this.ingredientesFiltrados = this.ingredientesDisponibles.filter(item =>
      item.ingrediente.nombre_ingrediente?.toLowerCase().includes(termino)
    );
  }

  guardarIngredientes() {
    const nuevosIngredientes = this.ingredientesDisponibles
      .filter(item => item.seleccionado && item.cantidad && item.cantidad.trim() !== '')
      .map(item => `${item.cantidad.trim()} ${item.ingrediente.nombre_ingrediente}`);

    this.receta.ingredientes = nuevosIngredientes;
    this.cerrarAgregarIngredientes();
    this.mostrarMensaje('Ingredientes actualizados correctamente');
  }

  cerrarAgregarIngredientes() {
    this.AbrirAgregarIngredientes = false;
  }
}
