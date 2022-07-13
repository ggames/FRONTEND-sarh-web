import { ListaSubunidadorganizativaComponent } from './pages/lista-subunidadorganizativa/lista-subunidadorganizativa.component';
import { SubunidadorganizativaComponent } from './pages/subunidadorganizativa/subunidadorganizativa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: SubunidadorganizativaComponent },
  { path: '', component: ListaSubunidadorganizativaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubunidadorganizativaRoutingModule { }
