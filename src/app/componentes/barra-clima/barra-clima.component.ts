import { Component, OnInit } from '@angular/core';
import { ClimaServiceService } from '../../servicio/clima-service.service';
@Component({
  selector: 'app-barra-clima',
  templateUrl: './barra-clima.component.html',
  styleUrls: ['./barra-clima.component.scss'],
})
export class BarraClimaComponent  implements OnInit {

clima:any;
  constructor(private ClimaServiceService:ClimaServiceService) { }
  

  ngOnInit(): void {
    const tiempo=localStorage.getItem('tiempo');
    if(tiempo){
      console.log('Clima cargado en local');
      this.clima=JSON.parse(tiempo);}
      else{
        this.ClimaServiceService.obtenerClima().subscribe((tiempo)=>{
        this.clima=tiempo;
        console.log('cargado desde la API');
        localStorage.setItem('tiempo',JSON.stringify(this.clima));
        });

      }

    }
}
