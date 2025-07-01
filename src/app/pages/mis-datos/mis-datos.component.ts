import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular/standalone';
import { UsuarioService } from '../../services/usuario.service';
import { IonItem, IonLabel, IonInput, IonDatetime, IonButton } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
  standalone: true,
  imports: [
      // Ionic
      IonItem,
      IonLabel,
      IonInput,
      IonDatetime,
      IonButton,
      // Angular,
      ReactiveFormsModule

  ]
})
export class MisDatosComponent {
  homeForm: FormGroup;
  animarTitulo = false;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private usuarioService: UsuarioService
  ) {
    this.homeForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nivel: [''],
      fechaNacimiento: [''],
      correo: [''],
      juegoFavorito: ['']
    });
  }

  async mostrar() {
    const nombre = this.homeForm.value.nombre;
    const apellido = this.homeForm.value.apellido;
    this.usuarioService.setDatos({
      usuario: nombre,
      correo: this.homeForm.value.correo,
      apellido: apellido,
      fechaNacimiento: this.homeForm.value.fechaNacimiento,
      nivel: this.homeForm.value.nivel,
      juegoFavorito: this.homeForm.value.juegoFavorito
    });
    const alert = await this.alertCtrl.create({
      header: 'Información',
      message: `Nombre: ${nombre} ${apellido}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  limpiar() {
    this.homeForm.reset();
    this.animarTitulo = true;
    setTimeout(() => this.animarTitulo = false, 1000);
  }
}
