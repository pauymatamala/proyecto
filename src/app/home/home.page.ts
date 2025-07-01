import { Component } from '@angular/core';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';


// Importa tus componentes hijos standalone
import { MisDatosComponent } from '../pages/mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from '../pages/experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../pages/certificaciones/certificaciones.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSegment,
    IonSegmentButton,
    IonLabel,
    FormsModule,
    CommonModule,
    NgSwitch,
    NgSwitchCase,
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent
  ]
})
export class HomePage {
  segmentValue = 'mis-datos';
}