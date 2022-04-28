import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientsService } from 'src/app/services/clients.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients$: Observable<Client[]>;
  displayedColumns: string[] = ['id', 'name', 'action'];

  messageError: string = 'Erro ao carregar a Lista, tente novamente mais tarde';
  actionError: string = 'OK';
  durationMessage: number = 3000;

  constructor(
    private clientsService: ClientsService,
    private _snackBar: MatSnackBar
    ) {
    this.clients$ = this.clientsService.list()
    .pipe(
      catchError(error => {
        this.onError();
        return of([])
      })
    );
  }

  onError() {
    this._snackBar.open(this.messageError, this.actionError, {
      duration: this.durationMessage,
    });
  }

  ngOnInit(): void {
  }

}
