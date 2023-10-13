import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.scss']
})
export class PosicionesComponent implements OnInit{

  equipos:any;

  constructor(private equipoServi:EquiposService){
  }
  ngOnInit(): void {
    this.equipoServi.cargar().subscribe({
      next:( e =>{
        this.equipos = e
    })
    });
      
  }

}
