import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnidadorganizativaService } from './../../../services/unidadorganizativa.service';
import { SubunidadorganizativaService } from './../../../services/subunidadorganizativa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subunidadorganizativa',
  templateUrl: './subunidadorganizativa.component.html',
  styleUrls: ['./subunidadorganizativa.component.css']
})
export class SubunidadorganizativaComponent implements OnInit {

  formSubunidad!:FormGroup;

  actualizar_subunidad!: boolean;

  subunidad: any;

  unidadesOrg: any = [];

  constructor(private subunidadService: SubunidadorganizativaService,
    private unidadService: UnidadorganizativaService,
    private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.formSubunidad = this.fb.group({
       id: [''],
       codigoGuarani: ['', Validators.required],
       nombre: ['', Validators.required],
       unidadOrganizativaId: ['', Validators.required]

    });
    
    
    this.activatedRoute.params.subscribe(
      (params: any) =>{ 
          const id = params?.id;
          if(id !== 'create'){
            this.cargarSubunidadOrganizativa(id);
            this.actualizar_subunidad = true;
          }
      });

    this.unidadService.obtenerTodasUnidadesOrganizacionales().subscribe(
      {
        next: resp => {
          this.unidadesOrg = resp;
        },
        error: err => {
          console.log(err);
        }
      }
    );


  }

  cargarSubunidadOrganizativa(id: any){
    this.subunidadService.obtenerSubunidadOrganizativa(id).subscribe({
      next: resp =>{
         this.subunidad = resp;
         this.subunidad.unidadOrganizativaId = resp.unidadOrganizativaId['id'];
         
         console.log("Sub UNIDAD " + JSON.stringify(this.subunidad));
         this.formSubunidad.setValue({
           id: this.subunidad.id,
           codigoGuarani: this.subunidad.codigoGuarani,
           nombre: this.subunidad.nombre,
           unidadOrganizativaId: this.subunidad.unidadOrganizativaId
         });
      },
      error: err => {
         console.log(err);
      }
    });
  }

  guardarSubunidadOrganizativa(): void {
     
    if(this.actualizar_subunidad){
        this.subunidadService.actualizarSubunidadOrganizativa(this.formSubunidad.value)
            .subscribe({
              next: resp => {
                    console.log("El registro se actualizó con exito");
              },
              error: err => {
                    console.log(err);
              }
            });     
     }else{

          this.subunidadService.guardarSubUnidadOrganizativa(this.formSubunidad.value)
            .subscribe({
               next: resp =>{
                    console.log("El registro se creó con exito");
               },
               error: err => {
                    console.error(err);
               }
            });
     }
    
  }

}
