import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Puntos } from '../models/puntos';
import { PuntoOrigen } from '../models/punto-origen';
import { PuntosCreado } from '../models/puntos-creado';

@Injectable({
  providedIn: 'root',
})
export class PuntoService {
  puntoURL = environment.puntoURL;
  constructor(private http: HttpClient) {}

  getAllPuntos(): Observable<Puntos[]> {
    return this.http.get<Puntos[]>(this.puntoURL + 'all');
  }

  getObtener(id: number): Observable<Puntos | void> {
    return this.http.get<Puntos>(this.puntoURL + id);
  }

  savePunto(punto: Puntos): Observable<Puntos> {
    console.log('NUEVO PUNTOS' + JSON.stringify(punto));
    //let puntos_origenes = new Array<PuntoOrigen>();

    /*  for (let origen of origenes) {
      const id: number = origen.id || 0;
      const cantidad: number = origen.cant_ocupado || 0;
      puntos_origenes.push(new PuntoOrigen(id, punto, cantidad));
    }

    punto.origenes = puntos_origenes;

 */ return this.http.post<Puntos>(this.puntoURL + 'create', punto);
  }
}
