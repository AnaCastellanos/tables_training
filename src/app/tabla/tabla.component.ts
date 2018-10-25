import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  columnas: string [] = ['Nombre','Apellido','Correo'];
  entradas = datos;
  constructor() { }
  ngOnInit() {
  }

}

export class TablaLista {
  Nombre: string;
  Apellido: string;
  Correo: string;
}

const datos: TablaLista [] = [
];
