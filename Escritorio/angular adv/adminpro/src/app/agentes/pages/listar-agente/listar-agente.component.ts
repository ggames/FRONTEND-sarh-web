import { TokenService } from 'src/app/services/token.service';
import { AgenteService } from './../../../services/agente.service';
import { Component, OnInit } from '@angular/core';
import { Agente } from 'src/app/models/agente';

@Component({
  selector: 'app-listar-agente',
  templateUrl: './listar-agente.component.html',
  styleUrls: ['./listar-agente.component.css'],
})
export class ListarAgenteComponent implements OnInit {
  agentes: Agente[] = [];

  cargando!: boolean;

  desde = 0;

  totalRegistros = 0;

  isAdmin = false;

  constructor(
    private agenteService: AgenteService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarAgentes();

    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarAgentes(): void {
    this.cargando = true;

    this.agenteService.getAllAgentes().subscribe((res) => {
      this.agentes = res;

      this.totalRegistros = this.agentes.length;
      this.cargando = false;
    });
  }
}
