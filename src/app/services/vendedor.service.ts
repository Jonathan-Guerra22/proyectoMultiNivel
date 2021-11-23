import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from '../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private Url:string="http://localhost:8090/api/usuarios/";
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  listarVendedores():Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.Url+`Vendedores`);
  }
  verVendedor(id:number):Observable<Vendedor>{
    return this.http.get<Vendedor>(`${this.Url}Vendedor/${id}`);
  }

  crearVendedor(vendedor:Vendedor):Observable<Vendedor>{
    return this.http.post<Vendedor>(`${this.Url}AgregarVendedor`,vendedor,{headers:this.httpHeaders});
  }
}
