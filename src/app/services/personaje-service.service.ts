import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { conexionConstants } from '../constantes/conexion.constant';

@Injectable({
  providedIn: 'root',
})
export class PersonajeServiceService {
  private URL_TODOS_LOS_PERSONAJES: string =
    conexionConstants.BASE_URL +
    conexionConstants.QUESTION +
    conexionConstants.FINAL_URL;

  constructor(private httpClient: HttpClient) {}

  public obtenerTodosLosPersonajes(): Observable<any> {
    return this.httpClient
      .get<any>(this.URL_TODOS_LOS_PERSONAJES)
      .pipe(map((data: any) => data.data.results));
  }

  public obtenerPersonajePorNombre(nombre: string): Observable<any> {
    const RUTA_BUSCAR_POR_NOMBRE =
      conexionConstants.BASE_URL +
      conexionConstants.QUESTION +
      `name=${nombre}` +
      conexionConstants.AND +
      conexionConstants.FINAL_URL;
    return this.httpClient
      .get<any>(RUTA_BUSCAR_POR_NOMBRE)
      .pipe(map((data: any) => data.data.results));
  }
}
