import { UnidadOrganizativaModule } from './../../unidad-organizativa.module';
import { Component, OnInit } from '@angular/core';
import { UnidadorganizativaService } from 'src/app/services/unidadorganizativa.service';

@Component({
  selector: 'app-listar-unidadesorganizativas',
  templateUrl: './listar-unidadesorganizativas.component.html',
  styleUrls: ['./listar-unidadesorganizativas.component.css']
})
export class ListarUnidadesorganizativasComponent implements OnInit {

  unidadesorganizativas: any = [];

  totalRegistros!: number;

  constructor(private unidadOrganizativaService:UnidadorganizativaService) { }


  ngOnInit(): void {

    this.cargarUnidadesOrganizativas();
  }
  

  cargarUnidadesOrganizativas(){
    this.unidadOrganizativaService.obtenerTodasUnidadesOrganizacionales()
            .subscribe(resp =>{
                  this.unidadesorganizativas = resp;
                  this.totalRegistros = this.unidadesorganizativas.length;
                  
            });
  }

}
