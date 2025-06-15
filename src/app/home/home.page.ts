import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class HomePage {
  usuario: string = '';
  homeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private usuarioService: UsuarioService
  ) {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'] || '';
    });

    this.homeForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nivel: [''],
      fechaNacimiento: [''],
      correo: [''], // Si quieres agregar correo, agrégalo aquí y en el formulario HTML
      juegoFavorito: [''] // Si quieres agregar juego favorito, agrégalo aquí y en el formulario HTML
    });
  }

  async mostrar() {
    const nombre = this.homeForm.value.nombre;
    const apellido = this.homeForm.value.apellido;
    // Guarda los datos en el servicio
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

  animarTitulo = false;

  limpiar() {
    this.homeForm.reset();
    this.animarTitulo = true;
    setTimeout(() => this.animarTitulo = false, 1000);
    // Animación para inputs (como ya tienes)
  }
}