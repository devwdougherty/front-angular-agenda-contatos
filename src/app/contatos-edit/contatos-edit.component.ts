import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs';

/* My imports */
import { ContatosService } from '../services/contatos.service';

/* PrimeNG */
import { MessageService } from 'primeng/components/common/messageservice'; 

@Component({
  selector: 'app-contatos-edit',
  templateUrl: './contatos-edit.component.html',
  styleUrls: ['./contatos-edit.component.css']
})
export class ContatosEditComponent implements OnInit {

  id: number;
  subscription: Subscription;
  oldId = 9999;
  contato: any;
  //To notify the table list of Contatos, that should be updated.
  @Output() contatoAtualizado = new EventEmitter();

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
  putContato(frm: FormGroup) {
    this.contatosService.putContato(this.contato).subscribe(
      response => {
        // Reset our registration form.
        frm.reset();

        this.messageService.add(
        {
          severity: 'info', detail: 'Contato atualizado com sucesso! Por favor atualize sua página :)',
          life: 100000
        })

        // Emit the event (we could also get the response object).
        this.contatoAtualizado.emit(response);
      },
      error => {
        console.log("Erro ao editar um Contato: ");
        console.log(error);
      })

    this.router.navigate(['./']);
  }

}
