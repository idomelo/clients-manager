import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Observable<Client[]>;
  displayedColumns: string[] = ['id', 'name', 'priority'];
  // clientsService: ClientsService;

  constructor(private clientsService: ClientsService) {
    // this.clientsService = new ClientsService();
    this.clients = this.clientsService.list();
  }

  ngOnInit(): void {
  }

}
