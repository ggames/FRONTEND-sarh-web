import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadorganizativaService {

  private URL_SERVER = "http://localhost:8080/unidad/";

  constructor(private httpClient: HttpClient) { }

  public  obtenerTodasUnidadesOrganizacionales(): Observable<any>{
    
    return this.httpClient.get(this.URL_SERVER + 'all');
  }

  public obtenerUnidadOrganizativa(id: any): Observable<any>{

    return this.httpClient.get(this.URL_SERVER + id);
  }

  public guardarUnidadOrganizativa(unidad: any): Observable<any>{

    return this.httpClient.post(this.URL_SERVER + 'create', unidad);
  }

  public actualizarUnidadOrganizativa(unidad: any): Observable<any>{

    return this.httpClient.put(this.URL_SERVER + `update/${unidad.id}`, unidad);
  }

}
