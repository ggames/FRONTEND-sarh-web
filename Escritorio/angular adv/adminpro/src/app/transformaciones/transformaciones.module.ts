import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformacionesRoutingModule } from './transformaciones-routing.module';
import { TransformacionesComponent } from './pages/transformaciones/transformaciones.component';
import { ListarTransformacionesComponent } from './pages/listar-transformaciones/listar-transformaciones.component';


@NgModule({
  declarations: [
    TransformacionesComponent,
    ListarTransformacionesComponent
  ],
  imports: [
    CommonModule,
    TransformacionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class TransformacionesModule { }
