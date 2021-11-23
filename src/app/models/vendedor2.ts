import { Roles } from "./roles";
import { Usuario } from "./usuario";
import { Vendedor } from "./vendedor";

export class Vendedor2{

    cedulavendedor:number=0;
    nombreVendedor:string="";
    apellidoVendedor:string="";
    celularVendedor:number=0;
    ciudadVendedor:string="";
    direccion:string="";
    estadoVendedor:string="";    
    grupo:number=0;
    //vendedoreAfiliador:Vendedor=new Vendedor;
    usuario:Usuario=new Usuario;
    roles:Roles[]=[];
}