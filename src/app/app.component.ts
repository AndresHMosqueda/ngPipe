import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Andres';
  nombre2 = "andres hernandez"

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  };


  valorDePromesa = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Llego la info'), 3000)
  })


  fecha = new Date();

  activar:boolean = true;
}
