import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private role: string | null = null;

  constructor(private http: HttpClient) {}

  registrarUsuario(usuarioData: Usuario): Observable<any> {
    return this.http.post(`https://dantuloo-travels.onrender.com/api/usuario/registrar`, usuarioData, { responseType: 'text' });
  }

  login(user: Login): Observable<any> {
    return this.http.post(`https://dantuloo-travels.onrender.com/api/usuario/login`, user).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        this.role = response.role;
        console.log('Token guardado:', localStorage.getItem('token'));
      })
    );
  }

  getRole(): string | null {
    if (!this.role) {
      this.role = localStorage.getItem('role');
    }
    return this.role;
  }
}
