import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private apiURL = "/api";

  private http =  Inject(HttpClient);

  constructor() {}

  consultarRecetas(): Observable<any> {
    return this.http.get(this.apiURL + '/recetas/all')
  }
}
