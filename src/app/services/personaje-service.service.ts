import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { conexionConstants } from '../constantes/conexion.constant';

@Injectable({
  providedIn: 'root',
})
export class PersonajeServiceService {
  constructor(private httpClient: HttpClient) {}

  public obtenerTodosLosPersonajes(): Observable<any> {
    const URL_TODOS_LOS_PERSONAJES: string =
      conexionConstants.BASE_URL +
      conexionConstants.QUESTION +
      conexionConstants.FINAL_URL;
    return this.httpClient
      .get<any>(URL_TODOS_LOS_PERSONAJES)
      .pipe(map((data: any) => data.data.results));
  }

  public obtenerPersonajePorNombre(nombre: string): Observable<any> {
    const RUTA_BUSCAR_POR_NOMBRE =
      conexionConstants.BASE_URL +
      conexionConstants.QUESTION +
      `nameStartsWith=${nombre}` +
      conexionConstants.AND +
      conexionConstants.FINAL_URL;
    return this.httpClient
      .get<any>(RUTA_BUSCAR_POR_NOMBRE)
      .pipe(map((data: any) => data.data.results));
  }

  public obtenerPersonajePorId(id: string): Observable<any> {
    const URL_PERSONAJE_POR_ID: string =
      conexionConstants.BASE_URL +
      `/${id}` +
      conexionConstants.QUESTION +
      conexionConstants.FINAL_URL;

    return this.httpClient
      .get<any>(URL_PERSONAJE_POR_ID)
      .pipe(map((data: any) => data.data.results));
  }
  public obtenerHistoriasPorPersonajeId(id: string): Observable<any> {
    const URL_PERSONAJE_POR_ID: string =
      conexionConstants.BASE_URL +
      `/${id}` +
      '/stories' +
      conexionConstants.QUESTION +
      'limit=5&' +
      conexionConstants.FINAL_URL;

    return this.httpClient
      .get<any>(URL_PERSONAJE_POR_ID)
      .pipe(map((data: any) => data.data.results));
  }
  public obtenerComicsPorPersonajeId(id: string): Observable<any> {
    const URL_PERSONAJE_POR_ID: string =
      conexionConstants.BASE_URL +
      `/${id}` +
      '/comics' +
      conexionConstants.QUESTION +
      conexionConstants.FINAL_URL;

    return this.httpClient
      .get<any>(URL_PERSONAJE_POR_ID)
      .pipe(map((data: any) => data.data.results));
  }
}
