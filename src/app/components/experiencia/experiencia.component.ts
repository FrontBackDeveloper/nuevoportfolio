import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Experiencia } from 'src/app/data/Experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  item:any=[];
  experienciaList:Experiencia[]=[];
  isUserLogged: Boolean = false;

  constructor(private portfolio:PortfolioService,
              private authservice:AuthService) { }

  seleccionar(index:number){
    this.item = this.experienciaList[index];
  }

  guardarExperiencia(){
    alert("Se ha guardado correctamente");
  }
  eliminarExperiencia(){
    alert("Se ha eliminado correctamente");
  }

  ngOnInit(): void {
    this.isUserLogged = this.authservice.isUserLogged();
    this.portfolio.obtenerDatosExperiencia().subscribe(data =>{
      this.experienciaList=data;
      console.log(data);  
    });
  }

}
