import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario = '';
  correo = '';
  apellido = '';
  fechaNacimiento = '';
  nivel = '';
  juegoFavorito = '';

  setDatos(datos: any) {
    this.usuario = datos.usuario;
    this.correo = datos.correo;
    this.apellido = datos.apellido;
    this.fechaNacimiento = datos.fechaNacimiento;
    this.nivel = datos.nivel;
    this.juegoFavorito = datos.juegoFavorito;
  }
}