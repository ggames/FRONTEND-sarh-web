import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { AgentesRoutingModule } from './agentes-routing.module';
import { EditarAgenteComponent } from './editar-agente/editar-agente.component';
import { AgenteComponent } from './agente/agente.component';
import { DialogAgenteComponent } from './dialog-agente/dialog-agente.component';

@NgModule({
  declarations: [AgenteComponent, EditarAgenteComponent, DialogAgenteComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AgentesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    FontAwesomeModule,
  ],
  providers: [],
  entryComponents: [MatDialogModule],
})
export class AgentesModule {}
