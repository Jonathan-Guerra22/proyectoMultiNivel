import { Pedido } from "./pedido";
import { Producto } from "./productos";

export class Venta{

    idVenta:number=0;
    fecha:number=0;
    nombreComprador:string="";
    apellidoComprador:string="";
    telefonoComprador:number=0;
    correoComprador:string="";
    ciudadComprador:string="";
    direccionComprador:string="";
    //private List<Pedido> pedidos;
    pedidos:Pedido[]= [];
    cedulavendedor:number=0;
    total:number=0;
}