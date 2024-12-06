import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
nombre1: string = 'ejemplo holaa que tal?';
nombre2: string = 'ejemplo 2';
nombre3: boolean = true;

}
