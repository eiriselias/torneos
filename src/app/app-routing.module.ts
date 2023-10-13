import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { NuevoEquipoComponent } from './components/nuevo-equipo/nuevo-equipo.component';
import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';

const routes: Routes = [
  {path:"", component:EquipoComponent},
  {path:"newEquipo", component:NuevoEquipoComponent},
  {path:"newJugador", component:NuevoJugadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
