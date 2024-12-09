import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface RootObject {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
}
interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface RootObject {
  daily: (Daily | string)[];
}
interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: Temp;
  feels_like: Feelslike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Feelslike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}


@Injectable({
  providedIn: 'root'
})
export class ClimaServiceService {
  private url='https://api.openweathermap.org/data/2.5/weather?lat=-33.45694&lon=-70.64827&lang=sp&appid=e8c6120cf4ed3a30ac10080f0a6ff75f&units=metric'

  constructor(
    private http:HttpClient
  ) { }
  obtenerClima():Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.url);
  }

}
