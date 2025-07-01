import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonLabel, IonInput, IonDatetime, IonCheckbox, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
  standalone: true,
  imports: [
    IonItem, IonLabel, IonInput, IonDatetime, IonCheckbox, IonButton, ReactiveFormsModule
  ]
})
export class CertificacionesComponent {
  certForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.certForm = this.fb.group({
      nombre: [''],
      fechaObtencion: [''],
      vence: [false],
      fechaVencimiento: ['']
    });
  }

  guardar() {
    alert(JSON.stringify(this.certForm.value));
  }
}
