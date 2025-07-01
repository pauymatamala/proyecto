import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonLabel, IonInput, IonCheckbox, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonButton,
    ReactiveFormsModule
  ]
})
export class ExperienciaLaboralComponent {
  expForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expForm = this.fb.group({
      empresa: [''],
      anioInicio: [''],
      actual: [false],
      anioTermino: [''],
      cargo: ['']
    });
  }

  guardar() {
    // Aquí puedes agregar lógica para guardar la experiencia laboral
    alert(JSON.stringify(this.expForm.value));
  }
}
