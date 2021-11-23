import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})

export class VentaService {

  private Url:string="http://localhost:8090/api/ventas/";
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  listarVentas():Observable<Venta[]> {
    return this.http.get<Venta[]>(this.Url+`ListarVentas`);
  }

  verVentaVendedor(cedula:number):Observable<Venta[]>{
    return this.http.get<Venta[]>(`${this.Url}ListarVentasCCVendedor/${cedula}`);
  }
  verPedidoVentaVendedor(cedula:number):Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.Url}ListarVentasCCVendedor/${cedula}`);
  }
  crearVenta(venta:Venta):Observable<Venta>{
    return this.http.post<Venta>(`${this.Url}CrearVenta`,venta,{headers:this.httpHeaders});
  }

}
