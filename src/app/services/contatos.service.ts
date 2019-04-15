import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private apiUrl = "https://localhost:44393/api";

  constructor(private http: HttpClient) { }

  /*
    WEB API GetAll method.
  */
  list(): Observable<any> {
  	console.log("list() method...");
  	return this.http.get<any[]>(`${this.apiUrl}/contatos`);
  }

  /*
    WEB API by Id method.
  */
  getById(id: number): Observable<any> {
    console.log("getById() method...");
    console.log("my url: ")
    console.log(`${this.apiUrl}/contatos/${id}`);
    return this.http.get<any[]>(`${this.apiUrl}/contatos/${id}`);
  }

  /*
    WEB API Post method.
  */
  addContato(contato: any): Observable<any> {
  	console.log("addContato() method...");
  	return this.http.post<any>(`${this.apiUrl}/contatos`, contato);
  }

  /*
    WEB API Put method.
  */
  putContato(contato: any): Observable<any> {
    console.log("putContato() method...");
    return this.http.put<any>(`${this.apiUrl}/contatos/${contato.id}`, contato);
  }

  /*
    WEB API Delete method.
  */
  deleteContato(id: any): Observable<any> {
    console.log("deleteContato() method...");
    return this.http.delete<any>(`${this.apiUrl}/contatos/${id}`, id);
  }
}
