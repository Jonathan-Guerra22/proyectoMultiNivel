import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listadeUsuarios:Usuario[]=[];
  
  constructor(private service:UsuarioService) { }

  ngOnInit(): void {
    this.service.listarUsuarios().subscribe((lista) => (this.listadeUsuarios=lista))
  }

}
