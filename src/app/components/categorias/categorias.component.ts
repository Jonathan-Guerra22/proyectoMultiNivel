import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias: Categoria[] = [];
  listaNombreCategorias: Categoria[] = [];
  categoria:string="Jeans";

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.service.listarCategorias().subscribe((list) => (this.listaCategorias = list));
    
  }

  
}
