import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario:Usuario = new Usuario;
  error:any;

  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit(): void { }

  crear(){
    this.service.crearUsuario(this.usuario).subscribe(usuario =>{
      Swal.fire('Nuevo!',`La usuario ${usuario.nomusuario} con correo ${usuario.correo} ha sido registrada en el sistema`,'success')
      this.router.navigate(["/usuarios"]);
    },err=>{
      if(err.status === 400){
        this.error=err.error;
      }
    });
  }

}
