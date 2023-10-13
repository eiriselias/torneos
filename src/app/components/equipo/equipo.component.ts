import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
    
    equipos:any;
    id: number = 2;

    constructor(private dataEquipos:EquiposService){
    }
    ngOnInit(): void {
      this.dataEquipos.cargar().subscribe({
        next:(eq =>{
          this.equipos = eq
        })
      })
    }
}
