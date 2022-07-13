
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../main/pages.component';
import { EditarAgenteComponent } from './pages/editar-agente/editar-agente.component';
import { ListarAgenteComponent } from './pages/listar-agente/listar-agente.component';
import { NuevoAgenteComponent } from './pages/nuevo-agente/nuevo-agente.component';

const routes: Routes = [
  
      { path: ':id', component: NuevoAgenteComponent },
      { path: 'editar', component: EditarAgenteComponent },
      { path: '', component: ListarAgenteComponent },
     // { path: '**', redirectTo: 'listado' },
          
     
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentesRoutingModule { }
