import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { PuntosRoutingModule } from './puntos-routing.module';

import { ListaPuntosComponent } from './pages/lista-puntos/lista-puntos.component';
import { NuevoPuntosComponent } from './pages/nuevo-puntos/nuevo-puntos.component';

@NgModule({
  declarations: [NuevoPuntosComponent, ListaPuntosComponent],
  imports: [
    CommonModule,
    PuntosRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PuntosModule {}
