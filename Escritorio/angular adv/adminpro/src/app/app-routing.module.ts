import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './main/pages.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'page',
    component: PagesComponent,
    loadChildren: () =>
      import('./main/pages.module').then((m) => m.PagesModule),
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
