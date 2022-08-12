import { ListarAgenteComponent } from './pages/listar-agente/listar-agente.component';
import { NuevoAgenteComponent } from './pages/nuevo-agente/nuevo-agente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentesRoutingModule } from './agentes-routing.module';

@NgModule({
  declarations: [NuevoAgenteComponent, ListarAgenteComponent],
  imports: [
    CommonModule,
    AgentesRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class AgentesModule {}
