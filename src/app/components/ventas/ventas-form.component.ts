import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { Producto } from 'src/app/models/productos';
import { Venta } from 'src/app/models/venta';
import { ProductoService } from 'src/app/services/producto.service';
import { VentaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls: ['./ventas-form.component.css']
})
export class VentasFormComponent implements OnInit {
  
  listadeVenta:Venta[]=[];
  listadePedidos:Pedido[]=[];
  venta:Venta=new Venta;
  error:any
  numeroCantidad:number=0;
  productos: Producto[]=[];
  listaProductos:Pedido[]=[];
  pedido: Pedido = new Pedido(0,0,new Producto);

  constructor(private service:VentaService,private serviceProducto:ProductoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos(){
    this.serviceProducto.listarProductos().subscribe(p=>{
      p.forEach(i =>{
        console.log(i)
        this.listaProductos.push(new Pedido(0,i.idproducto,i));
      })
    })
  }

  crear(){
    let valor = parseInt((document.getElementById("cedulavendedor") as HTMLInputElement).value)
    
    if(valor==0){
      Swal.fire('Nuevo!',`Introduzca la cedula del vendedor`,'warning')
    }else{
      this.venta.pedidos=this.listadePedidos
      this.service.crearVenta(this.venta).subscribe(venta =>{
        Swal.fire('Nuevo!',`La venta se ha creado y registrado en el sistema`,'success')
        this.router.navigate(["/ventas"]);
      },err=>{
        if(err.status === 400){
          this.error=err.error;
        }
      });
    }
  }
  
  agregarProducto(pedido:Pedido){
    this.listadePedidos.push(pedido);
  }

    mas(){
      let valor = parseInt((document.getElementById("cantidadProducto") as HTMLInputElement).value)
      valor+=1
      this.numeroCantidad=valor;
      this.pedido.unidades=valor;
    }
  
    menos(){
      let valor = parseInt((document.getElementById("cantidadProducto") as HTMLInputElement).value)
      valor-=1
      this.numeroCantidad=valor;
      this.pedido.unidades=valor;
    }
}
