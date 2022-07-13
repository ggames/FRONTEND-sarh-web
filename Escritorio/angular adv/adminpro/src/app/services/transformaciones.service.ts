import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transformacion } from '../models/transformacion';

@Injectable({
  providedIn: 'root'
})

export class TransformacionesService {

  private API_SERVER = "http://localhost:8080/transformacion/";


  constructor(private httpClient: HttpClient) { }

  public obtenerTodasTransformaciones(): Observable<any>{
    
    return this.httpClient.get(this.API_SERVER + 'all');
 
  }

  public guardarTransformacion(transformacion: any){
    console.log("TRANSFORMACION " + JSON.stringify(transformacion));
    return this.httpClient.post(this.API_SERVER + 'create', transformacion);
  }

  public actualizarTransformacion(transformacion: any): Observable<any>{
    
    console.log("ACTUALIZACION DE TRANSFORMACION " + this.API_SERVER + `update/${transformacion.id}`);
    
    console.log("TRANSFORMACION " + JSON.stringify(transformacion));
    return this.httpClient.put(this.API_SERVER + `update/${transformacion.id}`, transformacion);
  
    //return this.httpClient.put(this.API_SERVER + `update/${agente.id}`, agente);
  //  return this.httpClient.put(this.API_SERVER + `update/${agente.id}`, agente);
  //return this.httpClient.put(this.API_SERVER + `update/${transformacion.id}`, transformacion);

  }

  public obtenerTransformacion(id: number): Observable<any>{

    return this.httpClient.get(this.API_SERVER + id);
  }

}
