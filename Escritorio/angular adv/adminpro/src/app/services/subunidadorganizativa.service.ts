import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadOrganizativa } from '../models/unidad-organizativa';

@Injectable({
  providedIn: 'root'
})
export class SubunidadorganizativaService {

  private URL_SERVER = "http://localhost:8080/subunidad/";

  constructor(private httpClient:HttpClient) {}

  obtenerTodasSubUnidadesOrganizativas():Observable<any>{
    
    return this.httpClient.get(this.URL_SERVER + 'all');
  }

  obtenerSubunidadOrganizativa(id: number): Observable<any>{

    return this.httpClient.get(this.URL_SERVER + id);
  }

  guardarSubUnidadOrganizativa(subunidad: any): Observable<any>{
   
    subunidad.unidadOrganizativaId = new UnidadOrganizativa(subunidad.unidadOrganizativaId, '',0, 0);
    
    return this.httpClient.post(this.URL_SERVER + 'create', subunidad); 
    
  }

  actualizarSubunidadOrganizativa(subunidad: any): Observable<any>{

    subunidad.unidadOrganizativaId = new UnidadOrganizativa(subunidad.unidadOrganizativaId, '',0, 0);

    return this.httpClient.put( this.URL_SERVER + `update/${subunidad.id}`, subunidad);
    
  }
}
