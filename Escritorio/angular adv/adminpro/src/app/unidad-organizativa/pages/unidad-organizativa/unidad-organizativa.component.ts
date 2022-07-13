import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UnidadorganizativaService } from 'src/app/services/unidadorganizativa.service';

@Component({
  selector: 'app-unidad-organizativa',
  templateUrl: './unidad-organizativa.component.html',
  styleUrls: ['./unidad-organizativa.component.css']
})
export class UnidadOrganizativaComponent implements OnInit {

  unidadOrganizativa: any;

  formUnidadorganizativa!: FormGroup;

  actualizarUO!: boolean;

  constructor(private unidadOrganizativaService: UnidadorganizativaService,
    private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formUnidadorganizativa = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      directorId: ['', Validators.required],
      viceDirectorId: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe((params: any) => {
      const id = params?.id;

      if (id !== 'create') {
        this.actualizarUO = true;
        this.obtenerUnidadOrganizativa(id);
      }

    });

  }
 
  guardarUnidadOrganizativa(){
     if(this.actualizarUO){
         this.unidadOrganizativaService.actualizarUnidadOrganizativa(this.formUnidadorganizativa.value)
            .subscribe({

              next: resp => { 
                    console.log('El registro se actualizó con exito');
                                },
              error: err => {
                  console.log('hubo un error ' + err);
              }

            });
     }
     else {
      this.unidadOrganizativaService.guardarUnidadOrganizativa(this.formUnidadorganizativa.value)
         .subscribe({
             next: resp =>{ 
               console.log('Se registro correctamente la unidad');
             },
             error: err => {
               console.log('hubo un error' + err);
             }
         });
     }

  }


  obtenerUnidadOrganizativa(id: any) {

    this.unidadOrganizativaService.obtenerUnidadOrganizativa(id)
      .subscribe({
        next: resp => {
          this.unidadOrganizativa = resp
          this.formUnidadorganizativa.setValue({
            id:  this.unidadOrganizativa.id,
            nombre: this.unidadOrganizativa.nombre,
            directorId: this.unidadOrganizativa.directorId,
            viceDirectorId: this.unidadOrganizativa.viceDirectorId
          });
        },
        error: err => { console.log(err); }
      });

  }

}
