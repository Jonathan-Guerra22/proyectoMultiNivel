import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private Url:string="http://localhost:8090/api/categorias/";
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }


  listarCategorias():Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.Url+`Categorias`);
  }

  crearCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.Url+`Agregarcategoria`,categoria,{headers:this.httpHeaders});
  }

}
