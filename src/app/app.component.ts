import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Ejercicio2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CURSO';
}
