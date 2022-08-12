import { ListarAgenteComponent } from './pages/listar-agente/listar-agente.component';
import { NuevoAgenteComponent } from './pages/nuevo-agente/nuevo-agente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: NuevoAgenteComponent },

  { path: '', component: ListarAgenteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentesRoutingModule {}
