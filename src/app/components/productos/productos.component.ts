import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  listaProductos:Producto[] =[];
  constructor(private service:ProductoService) { }

  ngOnInit(): void {
    this.service.listarProductos().subscribe((list) => (this.listaProductos = list));
  }
  ver(p:Producto){
    console.log(this.listaProductos)
    console.log(p)
    console.log('http://localhost:8090/api/categorias/verImagen/img/'+p.idproducto+'?imagenHashCode='+p.fotoproductoHashCode)
    
    
    Swal.fire({
      imageUrl: "http://localhost:8090/api/categorias/verImagen/img/"+p.idproducto+"?imagenHashCode="+p.fotoproductoHashCode,
      imageHeight:700
    })


  }
}
