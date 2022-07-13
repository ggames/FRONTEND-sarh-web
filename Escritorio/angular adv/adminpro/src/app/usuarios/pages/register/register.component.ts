//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { TokenService } from './../../../services/token.service';
import { NuevoUsuario } from './../../../models/nuevo-usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isRegister = false;
  isRegisterfail = false;
  nuevoUsuario: NuevoUsuario | undefined;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister() {
    this.nuevoUsuario = new NuevoUsuario(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );

    this.authService.nuevo(this.nuevoUsuario).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'El usuario' + this.nombreUsuario + ' se guardo con exito',
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isRegister = false;
        this.isRegisterfail = true;
        this.errMsj = err.error.mensaje;

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo registrar al usuario',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    });
  }
}
