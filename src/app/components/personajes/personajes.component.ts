import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajeServiceService } from 'src/app/services/personaje-service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  constructor(private personajeService: PersonajeServiceService) {}

  public todosLosPersonajes: any = [];
  public contadorSuperHeroesImpresos = 0;

  ngOnInit(): void {
    this.obtenerTodosLosPeresonajes();
    console.log(this.todosLosPersonajes.length);
  }

  private obtenerTodosLosPeresonajes(): void {
    this.todosLosPersonajes = this.personajeService.obtenerTodosLosPersonajes();
  }

  public obtenerPersonajePorNombre(nombre: any): void {
    this.todosLosPersonajes = this.personajeService.obtenerPersonajePorNombre(
      nombre.target.value
    );
    if (nombre.target.value == '' || nombre.value.target == null) {
      this.obtenerTodosLosPeresonajes();
    }
  }
}
