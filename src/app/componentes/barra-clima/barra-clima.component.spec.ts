import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarraClimaComponent } from './barra-clima.component';
import { Observable, of } from 'rxjs';
import { ClimaServiceService } from 'src/app/servicio/clima-service.service';

const apiClimaMock:{
  obtenerClima:()=> Observable<any>
}={
  obtenerClima: () =>of({
    "coord": {
        "lon": -70.6483,
        "lat": -33.4569
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "cielo claro",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 23.08,
        "feels_like": 22.51,
        "temp_min": 21.53,
        "temp_max": 23.66,
        "pressure": 1014,
        "humidity": 41,
        "sea_level": 1014,
        "grnd_level": 930
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.06,
        "deg": 0
    },
    "clouds": {
        "all": 0
    },
    "dt": 1732373100,
    "sys": {
        "type": 2,
        "id": 2094385,
        "country": "CL",
        "sunrise": 1732354069,
        "sunset": 1732404651
    },
    "timezone": -10800,
    "id": 3871336,
    "name": "Santiago",
    "cod": 200
})
}

describe('BarraClimaComponent', () => {
  let component: BarraClimaComponent;
  let fixture: ComponentFixture<BarraClimaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraClimaComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{provide: ClimaServiceService, useValue: apiClimaMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(BarraClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
