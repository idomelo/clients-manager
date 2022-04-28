import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // form: FormGroup;
  clients$!: Observable<Client[]>;

  client: Client = {
    _id: '',
    name: '',
    priority: '0',
  };

  constructor(
    // private formBuilder: FormBuilder, 
    private clientsService: ClientsService,
  ) {
    // this.form = this.formBuilder.group({
    //   name: [null],
    //   priority: ['0']
    // });
  }

  ngOnInit(): void {
  }

  onSubmit(frm: any) {
    const data = {
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
