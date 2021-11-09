import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private Url:string="http://localhost:8090/api/categorias/";
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  listarProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.Url+`Productos`);
  }
  listarCategoriasProductos():Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.Url+`Categorias`);
  }

  verProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.Url}Producto/${id}`);
  }

  crearProducto(producto:Producto):Observable<Producto>{
    console.log(`${this.Url}AgregarProducto`,producto,{headers:this.httpHeaders});
    return this.http.post<Producto>(`${this.Url}AgregarProducto`,producto,{headers:this.httpHeaders});
  }
  crearConImagen(producto:Producto,archivo:File):Observable<Producto>{
    
    const formData=new FormData();
    formData.append('archivo',archivo);
    formData.append('nombreproducto',producto.nombreproducto);
    formData.append('precioproducto',producto.precioproducto.toString());
    formData.append('colorproducto',producto.colorproducto);
    formData.append('tallaproducto',producto.tallaproducto);
    formData.append('descripcionproducto',producto.descripcionproducto);
    formData.append('categoria',producto.categoria.id.toString());

    return this.http.post<Producto>(this.Url+`crear-producto-con-imagen`,formData);
  }

  modificarProducto(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${this.Url}editarProductos/${producto.idproducto}`,producto,{headers:this.httpHeaders});
  }

  modificarConImagen(producto:Producto,archivo:File):Observable<Producto>{
    
    const formData=new FormData();
    formData.append('archivo',archivo);
    formData.append('nombreproducto',producto.nombreproducto);
    formData.append('colorproducto',producto.colorproducto);
    formData.append('tallaproducto',producto.tallaproducto);
    formData.append('descripcionproducto',producto.descripcionproducto);

    return this.http.put<Producto>(`${this.Url}editarProducto/${producto.idproducto}`,formData);
  }


}
