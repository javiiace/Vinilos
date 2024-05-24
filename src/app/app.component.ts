import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./componentes/navbar/navbar.component";
import {HeroComponent} from "./componentes/hero/hero.component";
import {TarjetasComponent} from "./componentes/tarjetas/tarjetas.component";
import {ContadorComponent} from "./componentes/contador/contador.component";
import {FooterComponent} from "./componentes/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, TarjetasComponent, ContadorComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Practica1';
}
