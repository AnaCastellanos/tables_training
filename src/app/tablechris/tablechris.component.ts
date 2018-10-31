import { Component, OnInit } from '@angular/core';
import { Recursos } from '../recursos.model';

@Component({
  selector: 'app-tablechris',
  templateUrl: './tablechris.component.html',
  styleUrls: ['./tablechris.component.css']
})
export class TablechrisComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo'];
  dataSource: Recursos [] = [];

  constructor() {
  }
  ngOnInit() {
    for (let counter = 0; counter < 10; counter++) {
      this.dataSource.push({Nombre: 'Christian', Apellido: 'Cruz', Correo: 'christian.Cruz@polimentes.mx'});
    }
  }
}
