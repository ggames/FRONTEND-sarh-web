import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUnidadesorganizativasComponent } from './pages/listar-unidadesorganizativas/listar-unidadesorganizativas.component';
import { UnidadOrganizativaComponent } from './pages/unidad-organizativa/unidad-organizativa.component';

const routes: Routes = [
  { path: ':id', component: UnidadOrganizativaComponent},
  { path: '', component: ListarUnidadesorganizativasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadOrganizativaRoutingModule { }
