import { TransformacionesService } from './../../../services/transformaciones.service';
import { Component, OnInit } from '@angular/core';
import { Transformacion } from 'src/app/models/transformacion';

@Component({
  selector: 'app-listar-transformaciones',
  templateUrl: './listar-transformaciones.component.html',
  styleUrls: ['./listar-transformaciones.component.css']
})
export class ListarTransformacionesComponent implements OnInit {

  transformaciones: any = [];

  totalRegistro = 0;

  constructor(private transformacionesService: TransformacionesService) { }

  ngOnInit(): void {

    this.cargarTransformaciones();
  }

  cargarTransformaciones(): void {
    this.transformacionesService.obtenerTodasTransformaciones().subscribe(
      resp => {
           this.transformaciones = resp;
           console.log(JSON.stringify(resp));
           this.totalRegistro = this.transformaciones.length;
      }
    );
  }

}
