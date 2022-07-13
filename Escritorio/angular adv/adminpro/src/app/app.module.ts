import { LoginComponent } from './auth/pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// ************ RUTAS **************************

import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './interceptors/agent-interceptor.service';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProgressComponent } from './main/progress/progress.component';
import { Graficas1Component } from './main/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './main/pages.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // LoginComponent,
    PagesComponent,
    AppComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
