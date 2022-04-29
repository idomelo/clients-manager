import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  clients$!: Observable<Client[]>;

  client: Client = {
    _id: '',
    name: '',
    priority: '0',
  };

  constructor(
    private clientsService: ClientsService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(frm: any) {
    const data: object = {
      name: this.client.name,
      priority: this.client.priority
    };

    this.clientsService.create(data)
    .subscribe(res => {
      frm.reset();
      window.location.reload();
    })
  }
}
