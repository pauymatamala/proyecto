import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonNote, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonNote,
    IonButton
  ]
})
export class AccessPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]+$')
        ]
      ],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('^[0-9]{4}$')
        ]
      ]
    });
  }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.value.usuario;
      const contrasena = this.loginForm.value.contrasena;
      this.navCtrl.navigateForward(['/home'], {
        queryParams: { usuario, contrasena }
      });
    }
  }
}
