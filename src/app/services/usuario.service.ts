import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/usuario";
import {Observable} from "rxjs";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  registrarUsuario(usuarioData: Usuario): Observable<any> {
    return this.http.post(`http://localhost:8080/api/usuario/registrar`, usuarioData, { responseType: 'text' });
  }

  login(user: Login): Observable<any> {
    return this.http.post(`http://localhost:8080/api/usuario/login`, user, { responseType: 'text' });
  }


}
