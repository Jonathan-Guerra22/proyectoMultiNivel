import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  
  categoria:Categoria = new Categoria;
  error:any;

  constructor(private service:CategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.categoria.genero = 'Femenino';
  }

  crear(){
    this.service.crearCategoria(this.categoria).subscribe(categoria =>{
      Swal.fire('Nuevo!',`La categoria ${categoria.nombre} ha sido registrada en el sistema`,'success')
      this.router.navigate(["/categorias"]);
    },err=>{
      if(err.status === 400){
        this.error=err.error;
      }
    });
  }

}
