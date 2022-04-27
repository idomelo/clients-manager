import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';

const clients: Client[] = [
  {_id: '1', name: 'Ido Ferreira Melo', priority: '2'}
];

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'priority'];
  dataSource = clients;

  constructor() { }

  ngOnInit(): void {
  }

}
