import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PuntoOrigen } from './../../../models/punto-origen';
import { Puntos } from './../../../models/puntos';
import { PuntoService } from './../../../services/punto.service';
import { Component, OnInit } from '@angular/core';
import { PuntosCreado } from 'src/app/models/puntos-creado';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nuevo-puntos',
  templateUrl: './nuevo-puntos.component.html',
  styleUrls: ['./nuevo-puntos.component.css'],
})
export class NuevoPuntosComponent implements OnInit {
  puntoForm!: FormGroup;

  puntoOrigenList: Puntos[] = [];

  puntosChecked: Puntos[] = [];

  puntosOrigenElegido: PuntoOrigen[] = [];

  cantidadOcupada: number = 0;

  constructor(private puntoService: PuntoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.puntoForm = this.fb.group({
      id: [''],
      codigoCargo: ['', Validators.required],
      nombreCargo: ['', Validators.required],
      dedicacionCargo: ['', Validators.required],
      cantidad_puntos: ['', Validators.required],
    });

    this.puntoService.getAllPuntos().subscribe({
      next: (puntos) => {
        this.puntoOrigenList = puntos;
        console.log('LISTA DE PUNTOS ' + JSON.stringify(this.puntoOrigenList));
      },
      error: (err) => {
        console.log('Error carga');
      },
    });
  }

  isAllCheckboxChecked() {
    return this.puntoOrigenList.every((p) => p.checked);
  }

  checkAllCheckbox(e: any): void {
    this.puntoOrigenList.forEach((x) => (x.checked = e.target.checked));
  }

  onCheckboxChange(index: number): void {
    if (this.puntoOrigenList[index].checked == true) {
      this.puntosChecked.push(this.puntoOrigenList[index]);
    } else {
      const index1 = this.puntosChecked.findIndex(
        (x) => x.id === this.puntoOrigenList[index].id
      );

      this.puntosChecked.splice(index1, 1);
    }
    console.log('Puntos Origen  ' + JSON.stringify(this.puntosChecked));
  }

  changeCantidad(index: number, e: any) {
    if (this.puntoOrigenList[index].checked == true) {
      this.puntoOrigenList.forEach((x) => (x.cant_ocupado = e.target.value));
    } else {
      this.puntoOrigenList[index].cant_ocupado = 0;
    }
  }

  onSave(): void {
    this.puntoOrigenList.forEach((x) => {
      if (x.checked == true) {
        this.puntosOrigenElegido.push(
          new PuntoOrigen(x.id, this.puntoForm.value, x.cantidad_puntos)
        );
      }
    });

    const punto = new Puntos(
      this.puntoForm.get('codigoCargo')?.value,
      this.puntoForm.get('nombreCargo')?.value,
      this.puntoForm.get('dedicacionCargo')?.value,
      this.puntoForm.get('cantidad_puntos')?.value
    );

    punto.puntos_origenes = this.puntosOrigenElegido;

    console.log('PUNTOS NUEVO ' + JSON.stringify(punto));

    this.puntoService.savePunto(punto).subscribe({
      next: (resp) => {
        console.log('Registro guardado con exito ' + resp);
      },
      error: (err) => {
        console.log('Error al intentar guardar el registro');
      },
    });
  }
}
