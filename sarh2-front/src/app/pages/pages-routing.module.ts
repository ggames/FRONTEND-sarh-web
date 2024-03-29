import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'puntos',
    loadChildren: () =>
      import('./puntos/puntos.module').then((m) => m.PuntosModule),
  },

  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },

  {
    path: 'agentes',
    loadChildren: () =>
      import('./agentes/agentes.module').then((m) => m.AgentesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
