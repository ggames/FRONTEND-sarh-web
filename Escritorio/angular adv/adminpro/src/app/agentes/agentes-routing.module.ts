import { AgenteGuard } from './../guards/agente.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../main/pages.component';
import { EditarAgenteComponent } from './pages/editar-agente/editar-agente.component';
import { ListarAgenteComponent } from './pages/listar-agente/listar-agente.component';
import { NuevoAgenteComponent } from './pages/nuevo-agente/nuevo-agente.component';

const routes: Routes = [
  {
    path: ':id',
    component: NuevoAgenteComponent,
    canActivate: [AgenteGuard],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'editar',
    component: EditarAgenteComponent,
    canActivate: [AgenteGuard],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: '',
    component: ListarAgenteComponent,
    canActivate: [AgenteGuard],
    data: { expectedRol: ['admin', 'user'] },
  },
  // { path: '**', redirectTo: 'listado' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentesRoutingModule {}
