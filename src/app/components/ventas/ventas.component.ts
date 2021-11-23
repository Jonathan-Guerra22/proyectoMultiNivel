import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listadeVentas:Venta[]=[];
  
  constructor(private service:VentaService) { }

  ngOnInit(): void {
    this.service.listarVentas().subscribe((lista) => (this.listadeVentas=lista))
  }

}
