import { Roles } from "./roles";
import { Usuario } from "./usuario";
import { Vendedor2 } from "./vendedor2";


export class Vendedor{

    cedulavendedor:number=0;
    nombreVendedor:string="";
    apellidoVendedor:string="";
    celularVendedor:number=0;
    ciudadVendedor:string="";
    direccion:string="";
    estadoVendedor:string="";    
    grupo:number=0;
    vendedoreAfiliador:Vendedor2=new Vendedor2;
    usuario:Usuario=new Usuario;
    roles:Roles[]=[];
}