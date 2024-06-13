import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ViajeDos} from "../models/viajeDos";
import {Observable} from "rxjs";
import {ViajeUno} from "../models/viajeUno";
import {BuscarViaje} from "../models/buscarViaje";

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private http: HttpClient) { }

  publicarViajeUno(viaje: ViajeUno): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(`token: ${token}`);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`http://localhost:8080/api/viajes/publicar-viaje`, viaje, { headers, responseType: 'text' });
  }

  publicarViajeDos(infoAuto: ViajeDos): Observable<any>  {
    const token = localStorage.getItem('token');
    console.log(`token: ${token}`)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(`http://localhost:8080/api/viajes/publicar-viaje2/1`, infoAuto, { headers, responseType: 'text' });
  }

  buscarViaje(viaje: BuscarViaje): Observable<any[]> { // Cambiar el tipo de retorno a Observable<any[]>
    const token = localStorage.getItem('token');
    console.log(`token: ${token}`);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any[]>(`http://localhost:8080/api/viajes/buscar-viaje`, viaje, { headers });
  }
}
