import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  constructor(){
    
  }
  ngOnInit(): void {
    const modo = document.querySelector(".modo");
    modo?.addEventListener("click",()=>{
      document.body.classList.toggle("dark");
      document.querySelector(".oscuro")?.classList.toggle("ver")
      document.querySelector(".luz")?.classList.toggle("ver")
    })
  }
}

