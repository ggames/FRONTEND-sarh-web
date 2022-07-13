import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AgentesRoutingModule } from './agentes-routing.module';
import { NuevoAgenteComponent } from './pages/nuevo-agente/nuevo-agente.component';
import { EditarAgenteComponent } from './pages/editar-agente/editar-agente.component';
import { ListarAgenteComponent } from './pages/listar-agente/listar-agente.component';


@NgModule({
  declarations: [
    NuevoAgenteComponent,
    EditarAgenteComponent,
    ListarAgenteComponent
  ],
  imports: [
    CommonModule,
    AgentesRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
//    BrowserAnimationsModule
  ]
})
export class AgentesModule { }
