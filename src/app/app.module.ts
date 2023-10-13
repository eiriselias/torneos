import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HttpClientModule } from "@angular/common/http";
import { NuevoEquipoComponent } from './components/nuevo-equipo/nuevo-equipo.component';
import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PosicionesComponent,
    EquipoComponent,
    NuevoEquipoComponent,
    NuevoJugadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
