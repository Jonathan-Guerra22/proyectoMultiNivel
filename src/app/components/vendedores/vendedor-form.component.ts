import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {

  listadeVendedores:Vendedor[]=[];
  vendedor:Vendedor = new Vendedor;
  error:any;

  constructor(private service:VendedorService, private router:Router) { }

  ngOnInit(): void { 
    this.listarVendedoresAfiliados();
  }


  listarVendedoresAfiliados(){
    this.service.listarVendedores().subscribe((lista) => (this.listadeVendedores=lista))
  }

  
  crear(){
    this.vendedor.usuario.estado="Activo"
    this.service.crearVendedor(this.vendedor).subscribe(vendedor =>{
      Swal.fire('Nuevo!',`El vendedor ${vendedor.nombreVendedor} ${vendedor.apellidoVendedor} ha sido registrada en el sistema`,'success')
      this.router.navigate(["/vendedores"]);
    },err=>{
      if(err.status === 400){
        this.error=err.error;
      }
    });
  }
}
