import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonajeServiceService } from 'src/app/services/personaje-service.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent implements OnInit {
  constructor(
    private rutaActiva: ActivatedRoute,
    private personajeService: PersonajeServiceService
  ) {}

  public personaje: any = [];
  public historias: any = [];
  public comics: any = [];
  public contenidoCargado: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.cargarInformacion(this.rutaActiva.snapshot.params['id']);
    this.contenidoCargado = true;
  }

  private async cargarInformacion(idPersonaje: string): Promise<void> {
    await this.cargarPersonaje(idPersonaje);
    await this.cargarHistorias(idPersonaje);
    await this.cargarComics(idPersonaje);
  }

  private cargarPersonaje(id: string): void {
    this.personaje = this.personajeService.obtenerPersonajePorId(id);
  }
  private cargarHistorias(id: string) {
    this.historias = this.personajeService.obtenerHistoriasPorPersonajeId(id);
  }

  private cargarComics(id: string) {
    this.comics = this.personajeService.obtenerComicsPorPersonajeId(id);
  }
}
