import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SubunidadorganizativaRoutingModule } from './subunidadorganizativa-routing.module';

import { SubunidadorganizativaComponent } from './pages/subunidadorganizativa/subunidadorganizativa.component';
import { ListaSubunidadorganizativaComponent } from './pages/lista-subunidadorganizativa/lista-subunidadorganizativa.component';


@NgModule({
  declarations: [
    SubunidadorganizativaComponent,
    ListaSubunidadorganizativaComponent
  ],
  imports: [
    CommonModule,
    SubunidadorganizativaRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SubunidadorganizativaModule { }
