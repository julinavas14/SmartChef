import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../modelos/receta';
import { Ingrediente } from '../modelos/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  consultarRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(`${this.apiURL}/recetas/all`);
  }

  crearReceta(datosReceta: any): Observable<any> {
    return this.http.post(`${this.apiURL}/recetas/crear`, datosReceta);
  }

  eliminarReceta(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/recetas/${id}`);
  }

  modificarReceta(id: number, datosReceta: any): Observable<any> {
    return this.http.put(`${this.apiURL}/recetas/modificar/${id}`, datosReceta);
  }

  obtenerTodosIngredientes() {
    return this.http.get<Ingrediente[]>('api/ingredientes/all');
  }
}
