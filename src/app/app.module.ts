import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//PrimeNG
import { MessageService } from 'primeng/components/common/messageservice';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContatosListComponent } from './contatos-list/contatos-list.component';
import { ContatosRegisterComponent } from './contatos-register/contatos-register.component';
import { ContatosEditComponent } from './contatos-edit/contatos-edit.component';
import { ContatosDeleteComponent } from './contatos-delete/contatos-delete.component';

const appRoutes: Routes = [
  { path: 'contatos-edit/:id', component: ContatosEditComponent },
  { path: 'contatos-delete/:id', component: ContatosDeleteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContatosListComponent,
    ContatosRegisterComponent,
    ContatosEditComponent,
    ContatosDeleteComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    TableModule,
    InputTextModule,
    ButtonModule,
    GrowlModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
