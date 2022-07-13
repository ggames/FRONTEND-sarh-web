import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NuevoAgenteComponent } from '../agentes/pages/nuevo-agente/nuevo-agente.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule],
  exports: [],
})
export class PagesModule {}
