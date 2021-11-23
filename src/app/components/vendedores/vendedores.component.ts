import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  listadeVendedores:Vendedor[]=[];
  
  constructor(private service:VendedorService) { }

  ngOnInit(): void {
    this.service.listarVendedores().subscribe((lista) => (this.listadeVendedores=lista))
  }

}
