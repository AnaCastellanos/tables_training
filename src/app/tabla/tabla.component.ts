import { Component, OnInit } from '@angular/core';
import {TableSource} from '../models/TableSource.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayColumns: string[] = ['name', 'lastName', 'mail'];
  dataSource: TableSource[] = [];

  constructor() { }

  ngOnInit() {
    for (let counter = 0; counter < 10 ; counter++) {
      this.dataSource.push({name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'});
    }
  }

}

