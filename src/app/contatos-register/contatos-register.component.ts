import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* My imports */
import { ContatosService } from '../services/contatos.service';

/* PrimeNG */
import { MessageService } from 'primeng/components/common/messageservice'; 

@Component({
  selector: 'app-contatos-register',
  templateUrl: './contatos-register.component.html',
  styleUrls: ['./contatos-register.component.css']
})
export class ContatosRegisterComponent implements OnInit {

	contato: any;
	//To notify the table list of Contatos, that should be updated.
	@Output() contatoSalvo = new EventEmitter();

  constructor(private contatosService: ContatosService,
              private messageService: MessageService) { }

  ngOnInit() {
  	this.newContato()
  }

  newContato() {
  	this.contato = { Nome: "", Telefone: "" };
  }

  /*
    Add a Contact through .NET Core WEB API.
  */
  addContato(frm: FormGroup) {
  	this.contatosService.addContato(this.contato).subscribe(
  		response => {
  			// Reset our registration form.
  			frm.reset();

  			this.newContato();

        this.messageService.add(
        {
          severity: 'success', detail: 'Contato salvo com sucesso!',
          life: 50000
        })

  			// Emit the event (we could also get the response object).
  			this.contatoSalvo.emit(response);
  		},
  		error => {
  			console.log("Erro ao inserir um Contato: ");
  			console.log(error);
  		})
  }

}
