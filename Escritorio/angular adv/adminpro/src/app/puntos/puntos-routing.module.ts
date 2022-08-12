import { ListaPuntosComponent } from './pages/lista-puntos/lista-puntos.component';
import { NuevoPuntosComponent } from './pages/nuevo-puntos/nuevo-puntos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create', component: NuevoPuntosComponent },

  { path: '', component: ListaPuntosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntosRoutingModule {}
