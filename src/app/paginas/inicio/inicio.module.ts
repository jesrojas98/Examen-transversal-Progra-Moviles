import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CartaInicioComponent } from 'src/app/componentes/carta-inicio/carta-inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClimaServiceService } from '../../servicio/clima-service.service';
import { BarraClimaComponent } from 'src/app/componentes/barra-clima/barra-clima.component';
import { CdkDrag, CdkDragPlaceholder, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientModule,
    CdkDropListGroup, CdkDropList, CdkDrag, CdkDragPlaceholder, 
  ],
  providers: [ClimaServiceService],
  declarations: [InicioPage, CartaInicioComponent, BarraClimaComponent],
})
export class InicioPageModule {}
