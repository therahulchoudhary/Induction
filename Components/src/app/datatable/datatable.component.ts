import { Component, OnInit } from '@angular/core';

interface Users {
  name: string;
  age: number;
  contact: number;
}

const USERS : Users[]=[
  {
    name: 'Rahul Choudhary',
    age: 21,
    contact : 921
  },
  {
    name: 'Yashwant Soni',
    age: 21,
    contact : 921
  },
  {
    name: 'XYZ',
    age: 21,
    contact : 921
  },
  {
    name: 'QWERT',
    age: 21,
    contact : 921
  },
  {
    name: 'CVB',
    age: 21,
    contact : 921
  },
  {
    name: 'UIO',
    age: 21,
    contact : 921
  },
  {
    name: 'Rahul Choudhary',
    age: 21,
    contact : 921
  },
  {
    name: 'Yashwant Soni',
    age: 21,
    contact : 921
  },
  {
    name: 'XYZ',
    age: 21,
    contact : 921
  },
  {
    name: 'QWERT',
    age: 21,
    contact : 921
  },
  {
    name: 'CVB',
    age: 21,
    contact : 921
  },
  {
    name: 'UIO',
    age: 21,
    contact : 921
  },
  {
    name: 'Rahul Choudhary',
    age: 21,
    contact : 921
  },
  {
    name: 'Yashwant Soni',
    age: 21,
    contact : 921
  },
  {
    name: 'XYZ',
    age: 21,
    contact : 921
  },
  {
    name: 'QWERT',
    age: 21,
    contact : 921
  },
  {
    name: 'CVB',
    age: 21,
    contact : 921
  },
  {
    name: 'UIO',
    age: 21,
    contact : 921
  }
];
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {
  users = USERS;
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#table').DataTable();
  } );
  }

}
