import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayColumns: string[] = ['name', 'lastName', 'mail'];
  dataSource2 = DUDE_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export class DudeTable {
  name: string;
  lastName: string;
  mail: string;
}


const DUDE_DATA: DudeTable[] = [
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'},
  {name: 'Jorge Alberto', lastName: 'Piña Granados', mail: 'jorge.pina@polimentes.mx'}
];
