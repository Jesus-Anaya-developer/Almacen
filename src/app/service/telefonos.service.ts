import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class TelefonosService {

  constructor(private http: HttpClient) { }

  // * Obtener todos los imei
  obtenerTodosImei() {

    const url = `${environment.base_url}/todos`;
    return this.http.get(url);
  }


  // *Obtiene equipos en paginacion
  ObtenerEquiposPaginacion() {

    const url = `${environment.base_url}/obtener`;
    return this.http.get(url);
  }

  // *Obtiene IMEI especifico
  obtenerImei(imei: string) {

    const url = `${environment.base_url}/obtener/${imei}`;
    return this.http.get(url);
  }

  // *Obtener equipos por fecha
  obtenerEquiposPorFecha(fechaInicio: Date, fechaFin: Date) {

    const url = `${environment.base_url}/fecha/${fechaInicio}/${fechaFin}`;
    return this.http.get(url);
  }

  // *Obtener equipos por modelo
  obtenerEquiposPorModelo(modelo: string) {

    const url = `${environment.base_url}/modelo/${modelo}`;
    return this.http.get(url);
  }

  // *Obtener todos los modelos
  obtenerTodosModelos() {

    const url = `${environment.base_url}/modelos`;
    return this.http.get(url);
  }

}
