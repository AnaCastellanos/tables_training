import { Component, OnInit } from '@angular/core';
import {TableSourceModel} from '../models/TableSource.model';

@Component({
  selector: 'app-tabla-jorge',
  templateUrl: './tabla-jorge.component.html',
  styleUrls: ['./tabla-jorge.component.css']
})
export class TablaJorgeComponent implements OnInit {
  displayColumns: string[] = ['name', 'lastName', 'mail'];
  dataSource: TableSourceModel[] = [];

  constructor() { }

  ngOnInit() {
    for (let counter = 0; counter < 10 ; counter++) {
      this.dataSource.push({name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'});
    }
  }
}
