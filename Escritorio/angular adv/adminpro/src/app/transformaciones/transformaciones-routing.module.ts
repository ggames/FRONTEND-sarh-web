import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTransformacionesComponent } from './pages/listar-transformaciones/listar-transformaciones.component';
import { TransformacionesComponent } from './pages/transformaciones/transformaciones.component';

const routes: Routes = [
  { path: ':id', component: TransformacionesComponent },
  { path: '', component: ListarTransformacionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformacionesRoutingModule { }
