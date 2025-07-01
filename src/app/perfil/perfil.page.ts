import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonAvatar,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';
import { UsuarioService } from '../services/usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonAvatar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PerfilPage {
  constructor(public usuarioService: UsuarioService) {}
}