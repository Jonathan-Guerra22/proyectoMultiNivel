import { Producto } from "./productos";


export class Pedido{
    idpedido:number=0;
    unidades:number=0;
    idproducto:number=0;
    producto:Producto=new Producto;

    constructor(unidades:number,idproducto:number,producto:Producto){
        this.unidades=unidades;
        this.idproducto=idproducto;
        this.producto=producto;
    }
}

