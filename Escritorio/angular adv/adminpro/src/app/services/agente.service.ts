import { environment } from './../../environments/environment';
import { TipoDocumento } from 'src/app/models/tipodocumento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agente } from '../models/agente';

@Injectable({
  providedIn: 'root',
})
export class AgenteService {
  agenteURL = environment.agenteURL;

  constructor(private httpClient: HttpClient) {}

  public getAllAgentes(): Observable<any> {
    return this.httpClient.get(this.agenteURL + 'all');
  }

  public obtenerAgente(id: number): Observable<any> {
    return this.httpClient.get(this.agenteURL + id);
  }

  public saveAgente(agente: any): Observable<any> {
    agente.tipoDocId = new TipoDocumento(agente.tipoDocId, '');

    return this.httpClient.post(this.agenteURL + 'create', agente);
  }

  public actualizarAgente(agente: any): Observable<any> {
    agente.tipoDocId = new TipoDocumento(agente.tipoDocId, '');

    return this.httpClient.put(this.agenteURL + `update/${agente.id}`, agente);
  }
}
