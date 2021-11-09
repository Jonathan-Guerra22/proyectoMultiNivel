import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private Url:string="http://localhost:8090/api/usuarios/";
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  listarUsuarios():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.Url+`Usuarios`);
  }

  crearUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.Url}AgregarUsuario`,usuario,{headers:this.httpHeaders});
  }
}
