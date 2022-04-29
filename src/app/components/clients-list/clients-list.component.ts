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

  clientsArr: Array<Client> = [];

  // Array ordenado de acordo com prioridades
  clientsArrReord: Array<Client> = [];

  clients$: Observable<Client[]>;
  displayedColumns: string[] = ['position', 'name', 'priority', 'action'];

  buttonDisabled: boolean = false;

  messageError: string = 'Erro ao carregar a Lista, tente novamente mais tarde';
  actionError: string = 'OK';
  messageDuration: number = 3000;

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
      duration: this.messageDuration,
    });
  }

  onRemoveClient(clientId: string) {
    this.buttonDisabled = !this.buttonDisabled;

    this.clientsService.delete(clientId)
    .subscribe(res => {
      console.log(res);
      window.location.reload();
    })
  }

  ngOnInit(): void {
    //Pegando array de clientes de services e atribuindo à 'clientsArr'
    this.clientsService.clientsArray.subscribe(
      clients => {
        this.clientsArr = clients;

        //Retorna novo array em ordem de prioridade
        this.clientsArrReord = this.clientsArr.sort(function(a,b) {
          return b.priority < a.priority ? -1 : b.priority > a.priority ? 1 : 0
        });
      }
    )
  }

}
