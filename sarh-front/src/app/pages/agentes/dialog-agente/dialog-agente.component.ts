import { formatDate } from '@angular/common';
import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';

import { Agente } from './../../../models/agente';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AgenteService } from 'src/app/services/agente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoDocumento } from './../../../models/tipodocumento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-dialog-agente',
  templateUrl: './dialog-agente.component.html',
  styleUrls: ['./dialog-agente.component.css'],
})
export class DialogAgenteComponent implements OnInit {
  //Lista de tipos de documentos
  tiposdocumento: TipoDocumento[] = [];

  tipodocumento: TipoDocumento = new TipoDocumento('', '');
  //  agente: any; //Agente = new Agente('','', 0 ,'', new Date() ,'','','','');

  myDate!: Date | undefined;

  actualizacionAgente!: boolean;

  public agentForm = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    tipoDocId: ['', Validators.required],
    documento: ['', Validators.required],
    fechaNac: ['', Validators.required],
    legajo: ['', Validators.required],
    domicilio: ['', Validators.required],
    email: ['', Validators.required],
    telefono: [''],
  });

  constructor(
    private fb: FormBuilder,
    private agenteService: AgenteService,
    private tpdocumentoService: TipoDocumentoService,
    private router: Router,
    @Inject(LOCALE_ID) public locale: string,
    public dialogRef: MatDialogRef<DialogAgenteComponent>,
    @Inject(MAT_DIALOG_DATA) public agente: Agente
  ) {
    if (this.agente != null) {
      let mDate = formatDate(
        this.agente.fechaNac || new Date(),
        'dd/MM/yyyy',
        'en_US'
      );

      // this.myDate = this.agente.fechaNac;
      this.agentForm.setValue({
        id: this.agente.id,
        nombre: this.agente.nombre,
        apellido: this.agente.apellido,
        tipoDocId: this.agente.tipoDocId.id,
        documento: this.agente.documento,
        fechaNac: mDate,
        legajo: this.agente.legajo,
        domicilio: this.agente.domicilio,
        email: this.agente.email,
        telefono: this.agente.telefono,
      });
    }
  }

  ngOnInit(): void {
    //console.log('Fecha Nacimiento ' + this.myDate);

    this.getTipoDocumentos();
  }

  getTipoDocumentos() {
    this.tpdocumentoService.getTipoDocumentos().subscribe({
      next: (res) => {
        this.tiposdocumento = res;
      },

      error: (err) => {
        console.log('Error en la carga Tipo documento');
      },
    });
  }

  addAgente() {
    this.agenteService.saveAgente(this.agentForm.value).subscribe({
      next: (res) => {
        console.log('El agente se ha registrado exitosamente');
      },

      error: (err) => {
        console.log('No se pudo registrar al agente');
      },
    });
  }

  editAgente() {
    this.agenteService.actualizarAgente(this.agentForm.value).subscribe({
      next: (response) => {
        console.log('Edicion Agente ' + JSON.stringify(response));
      },
    });
  }

  updateDate(event: any) {
    // if (this.actualizacionAgente) {
    this.myDate = event.target.valueAsDate;
    // }
  }
}
