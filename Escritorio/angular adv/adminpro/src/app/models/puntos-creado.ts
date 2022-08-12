import { PuntoOrigen } from './punto-origen';

export class PuntosCreado {
  id!: number;
  codigoCargo: string | '';
  nombreCargo!: string;
  dedicacionCargo!: string;
  puntos_origenes?: PuntoOrigen[];
  cantidad_puntos!: number;
  // checked?: boolean = false;
  // cant_ocupado?: number;

  constructor(
    codigoCargo: string,
    nombreCargo: string,
    dedicacionCargo: string,
    cantidad_puntos: number
  ) {
    this.codigoCargo = codigoCargo;
    this.nombreCargo = nombreCargo;
    this.dedicacionCargo = dedicacionCargo;
    this.cantidad_puntos = cantidad_puntos;
  }
}
