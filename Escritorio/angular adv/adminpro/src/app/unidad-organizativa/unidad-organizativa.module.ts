import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadOrganizativaRoutingModule } from './unidad-organizativa-routing.module';


import { ListarUnidadesorganizativasComponent } from './pages/listar-unidadesorganizativas/listar-unidadesorganizativas.component';
import { UnidadOrganizativaComponent } from './pages/unidad-organizativa/unidad-organizativa.component';


@NgModule({
  declarations: [
    UnidadOrganizativaComponent,
    ListarUnidadesorganizativasComponent
  ],
  imports: [
    CommonModule,
    UnidadOrganizativaRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class UnidadOrganizativaModule { }
