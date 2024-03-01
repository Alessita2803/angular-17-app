import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //app envuelve a todos los componentes
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Hola mundo desde {{city.toUpperCase()}}{{1+1}}</h1>`,
  styles: `

  `,
})


export class AppComponent {
  city = 'Barcelona'; 
}
