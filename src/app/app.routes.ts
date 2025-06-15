import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'access',
    loadComponent: () => import('./access/access.page').then(m => m.AccessPage)
  },
  {
    path: 'juegos',
    loadComponent: () => import('./juegos/juegos.page').then(m => m.JuegosPage)
  },
  {
    path: 'ayuda',
    loadComponent: () => import('./ayuda/ayuda.page').then(m => m.AyudaPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion.page').then(m => m.ConfiguracionPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  }
];