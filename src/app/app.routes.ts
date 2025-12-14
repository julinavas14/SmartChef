import { Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {HomeComponent} from "./home/home.component";
import {VeganosComponent} from "./veganos/veganos.component";
import {ProteinasComponent} from "./proteinas/proteinas.component";
import {PostresComponent} from "./postres/postres.component";
import {ComidabasuraComponent} from "./comidabasura/comidabasura.component";
import {InicioSesionComponent} from "./inicio-sesion/inicio-sesion.component";
import {InicioSesion2Component} from "./inicio-sesion2/inicio-sesion2.component";
import {CrearCuentaComponent} from "./crear-cuenta/crear-cuenta.component";
import {CalendarioComponent} from "./calendario/calendario.component";
import {BuscadorComponent} from "./buscador/buscador.component";
import {InstockComponent} from "./instock/instock.component";
import {MegustaComponent} from "./megusta/megusta.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {AlimentoveganosComponent} from "./alimentoveganos/alimentoveganos.component";
import {MiToastComponent} from "./Mitoast/mi-toast.component"

export const routes: Routes = [
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  {path: 'Inicio', component: InicioComponent},
  {path: 'home', component: HomeComponent},
  {path: 'veganos', component: VeganosComponent},
  {path: 'proteinas', component: ProteinasComponent},
  {path: 'postres', component: PostresComponent},
  {path: 'comidabasura', component: ComidabasuraComponent},
  {path: 'iniciosesion', component:InicioSesionComponent},
  {path: 'iniciosesion2', component: InicioSesion2Component},
  {path: 'crearcuenta', component: CrearCuentaComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'buscador', component: BuscadorComponent},
  {path: 'instock', component: InstockComponent},
  {path: 'megusta', component: MegustaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'alimentoveganos', component: AlimentoveganosComponent},
  {path: 'toast', component: MiToastComponent}




];
