import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpCLient: HttpClient) { }

  list(): Client[] {
    return [
      {_id: '1', name: 'Ido Ferreira Melo', priority: '2'}
    ];
  }
}
