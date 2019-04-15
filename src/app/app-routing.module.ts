import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosEditComponent } from './contatos-edit/contatos-edit.component';
import { ContatosDeleteComponent } from './contatos-delete/contatos-delete.component';

const routes: Routes = [
	{ path: 'edit-contatos', component: ContatosEditComponent },
	{ path: 'delete-contatos', component: ContatosDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
