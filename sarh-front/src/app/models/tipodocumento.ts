export class TipoDocumento{
    nombre?: string;
    id?: string;

    constructor(id: string, nombre: string){
        this.id =id;
        this.nombre = nombre;
    }
}