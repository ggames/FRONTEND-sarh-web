import { Transformacion } from './../../../models/transformacion';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransformacionesService } from './../../../services/transformaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformaciones',
  templateUrl: './transformaciones.component.html',
  styleUrls: ['./transformaciones.component.css']
})
export class TransformacionesComponent implements OnInit {

  transformacionForm!: FormGroup;
  
  transformacion: any;

  actualizarTransf!: boolean;

  constructor(private transformacionesService: TransformacionesService,
    private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.transformacionForm = this.fb.group({
      id: [''],
      numero_resolucion: ['', Validators.required],
      resultado_transformacion: [ '' , Validators.required]
    });

    this.activatedRoute.params.subscribe(
      (params: any) => {
        const id = params?.id;
        if (id !== 'create') {
          this.actualizarTransf = true;
          this.cargarTransformacion(id);
        }

      }
    );

  }

  guardarTransformacion(): void {

    if (this.actualizarTransf) {
      this.transformacionesService.actualizarTransformacion(this.transformacionForm.value)
        .subscribe({
          next: resp => {
            console.log("La transformación se actualizó con exito");
          },
          error: err => {
            console.log(err);
          }
        });
    } else {
      this.transformacionesService.guardarTransformacion(this.transformacionForm.value)
        .subscribe({
          next: resp => {
            console.log("La transformación se creó con exito");
          }, error: err => {
            console.log(err);
          }
        });
    }

  }

  cargarTransformacion(id: any) {

    this.transformacionesService.obtenerTransformacion(id).subscribe(
      resp => {
        this.transformacion = resp;
        console.log("ID Transformacion " + this.transformacion.id );

        this.transformacionForm.setValue({
          id: this.transformacion.id,
          numero_resolucion: this.transformacion.numeroResolucion,
          resultado_transformacion: this.transformacion.resultadoTransformacion
        });
      }
    );

  }


}
