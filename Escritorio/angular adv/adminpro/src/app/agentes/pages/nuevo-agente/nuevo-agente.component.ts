import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agente } from 'src/app/models/agente';
import { AgenteService } from 'src/app/services/agente.service';
import { TpdocumentoService } from 'src/app/services/tpdocumento.service';
import { TipoDocumento } from 'src/app/models/tipodocumento';

// import * as moment from 'moment';

@Component({
  selector: 'app-nuevo-agente',
  templateUrl: './nuevo-agente.component.html',
  styleUrls: ['./nuevo-agente.component.css'],
})
export class NuevoAgenteComponent implements OnInit {
  //Lista de tipos de documentos
  tiposdocumento: any;
  tipodocumento: TipoDocumento = new TipoDocumento('', '');
  // agente
  agenteForm!: FormGroup;
  agente: any; //Agente = new Agente('','', 0 ,'', new Date() ,'','','','');

  myDate: Date | null = new Date();

  actualizacionAgente!: boolean;

  constructor(
    private fb: FormBuilder,
    private agenteService: AgenteService,
    private tpdocumentoService: TpdocumentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.agenteForm = this.fb.group({
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

    this.activatedRoute.params.subscribe((params: any) => {
      const id = params?.id;
      console.log('PARAMETRO ' + id);
      if (id !== 'create') {
        this.actualizacionAgente = true;
        this.cargarAgente(id);
      }
    });

    this.tpdocumentoService.getAllTpDocumento().subscribe(
      (resp) => {
        this.tiposdocumento = resp;
        console.log(resp);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  guardarAgente(): void {
    if (this.actualizacionAgente) {
      // this.agente.fechaNac = this.myDate;
      this.agenteService.actualizarAgente(this.agenteForm.value).subscribe({
        next: (resp) => {
          console.log('El agente se actualizó con exito');
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this.agenteService.saveAgente(this.agenteForm.value).subscribe({
        next: (resp) => {
          console.log('El agente se registro con exito');
        },
        error: (err) => {
          //    console.log(this.agenteForm.value);
          console.error(err);
        },
      });
    }
  }

  cargarAgente(id: any) {
    this.agenteService.obtenerAgente(id).subscribe((res) => {
      this.agente = res;
      this.agente.tipoDocId = res.tipoDocId['id'];

      this.myDate = new Date(this.agente.fechaNac);

      this.agenteForm.setValue({
        id: this.agente.id,
        nombre: this.agente.nombre,
        apellido: this.agente.apellido,
        tipoDocId: this.agente.tipoDocId,
        documento: this.agente.documento,
        fechaNac: this.myDate,
        legajo: this.agente.legajo,
        domicilio: this.agente.domicilio,
        email: this.agente.email,
        telefono: this.agente.telefono,
      });
    });
  }

  updateDate(event: any) {
    if (this.actualizacionAgente) {
      this.myDate = event.target.valueAsDate;
    }
  }
}
