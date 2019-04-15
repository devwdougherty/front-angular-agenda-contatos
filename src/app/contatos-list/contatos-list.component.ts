import { Component, OnInit } from '@angular/core';

import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.css']
})
export class ContatosListComponent implements OnInit {

  contatos: Array<any>;

  constructor(private contatosService : ContatosService) { }

  ngOnInit() {
  	this.list();
  }

  /*
    List the contacts from database through service class.
  */
  list() {
    this.contatosService.list().subscribe(
      response => {
        this.contatos = response;
        console.log("Contatos: ");
        console.log(this.contatos);
    },
      error => {   console.log("Erro ao listar contatos: ");
                  console.log(error);
                });
  }

}
