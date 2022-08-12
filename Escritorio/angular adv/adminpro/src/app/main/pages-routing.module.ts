import { NuevoAgenteComponent } from './../agentes/pages/nuevo-agente/nuevo-agente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAgenteComponent } from '../agentes/pages/listar-agente/listar-agente.component';

const routes: Routes = [
  {
    path: 'registro',
    loadChildren: () =>
      import('./../usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },

  {
    path: 'agente',
    loadChildren: () =>
      import('./../agentes/agentes.module').then((m) => m.AgentesModule),
  },
  {
    path: 'puntos',
    loadChildren: () =>
      import('./../puntos/puntos.module').then((m) => m.PuntosModule),
  },

  {
    path: 'transformacion',
    loadChildren: () =>
      import('./../transformaciones/transformaciones.module').then(
        (m) => m.TransformacionesModule
      ),
  },
  {
    path: 'unidadorganizativa',
    loadChildren: () =>
      import('./../unidad-organizativa/unidad-organizativa.module').then(
        (m) => m.UnidadOrganizativaModule
      ),
  },
  {
    path: 'subunidad',
    loadChildren: () =>
      import('./../subunidadorganizativa/subunidadorganizativa.module').then(
        (m) => m.SubunidadorganizativaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
