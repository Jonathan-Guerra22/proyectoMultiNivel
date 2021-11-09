import { Categoria } from "./categoria";

export class Producto{

    idproducto:number=0;
    estadoproducto:string="";
    nombreproducto:string="";
    fotoproductoHashCode:number=0;
    precioproducto:number=0.0;
    colorproducto:string="";
    tallaproducto:string="";
    descripcionproducto:string="";
    categoria:Categoria=new Categoria;

}