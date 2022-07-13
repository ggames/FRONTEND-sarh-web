import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TpdocumentoService {

  private API_SERVER = "http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }

  public getAllTpDocumento(): Observable<any>{
    return this.httpClient.get(this.API_SERVER + "tiposdocs");
  }

  public obtenerTipoDocumento(id:string): Observable<any>{
    
    return this.httpClient.get(this.API_SERVER + `tipodocs/${id}`)
  }
}
