import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

/* My imports */
import { ContatosService } from '../services/contatos.service';

/* PrimeNG */
import { MessageService } from 'primeng/components/common/messageservice'; 

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contatos-delete',
  templateUrl: './contatos-delete.component.html',
  styleUrls: ['./contatos-delete.component.css']
})
export class ContatosDeleteComponent implements OnInit {

  contato: any;
  id: number;
  subscription: Subscription;
  oldId = 9999;

  constructor(private route: ActivatedRoute,
  			  	  private router: Router,
  			      private contatosService: ContatosService,
  			      private messageService: MessageService) { }

  ngOnInit() {
  	this.subscription = this.route.params.subscribe(
      params => {
        this.id = params["id"];
      })
    
    this.getContatoToOperate();
  }

  ngDoCheck() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = params["id"];
      })

     this.getContatoToOperate();
  }

  /*
    Get a contact from database by ID to update or delete.
  */
  getContatoToOperate() {
    if (this.id != this.oldId) {
        this.contato = this.contatosService.getById(this.id).subscribe(
          response => {
          this.contato = response;
          console.log("Contato: ");
          console.log(this.contato);
        },
          error => {   console.log("Erro ao listar contatos: ");
                    console.log(error);
                  });

        this.oldId = this.id;
       }  
  }

  /*
    Edit a Contact through .NET Core WEB API.
  */
  deleteContato(frm: FormGroup) {
    this.contatosService.deleteContato(this.contato.id).subscribe(
      response => {

        this.messageService.add(
        {
          severity: 'info', detail: 'Contato excluido! Por favor atualize sua página :)',
          life: 100000
        })
      },
      error => {
        console.log("Erro ao excluir um Contato: ");
        console.log(error);
      })

    this.router.navigate(['./']);
  }

}
