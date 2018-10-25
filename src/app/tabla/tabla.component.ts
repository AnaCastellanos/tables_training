import { Component, OnInit } from '@angular/core';
import {DudeTable} from '../models/DudeTable.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayColumns: string[] = ['name', 'lastName', 'mail'];
  data1: DudeTable[] = [];
  dataSource2 = this.data1;

  constructor() { }

  ngOnInit() {
    for (let counter = 0; counter < 10 ; counter++) {
      this.data1.push({name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'});
      console.log(this.data1[counter]);
  }
  }

  // aumenter() {
  //   for (let counter = 0; counter < 10 ; counter++) {
  //     this.data1.push({name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'});
  //     console.log(this.data1[counter]);
  //   }
  // }

}




// const DUDE_DATA: DudeTable[] = [
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
//   {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'}
// ];


