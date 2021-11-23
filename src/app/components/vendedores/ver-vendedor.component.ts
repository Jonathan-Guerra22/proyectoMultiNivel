import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { Venta } from 'src/app/models/venta';
import { Pedido } from 'src/app/models/pedido';
import { VendedorService } from 'src/app/services/vendedor.service';
import { VentaService } from 'src/app/services/venta.service';


@Component({
  selector: 'app-ver-vendedor',
  templateUrl: './ver-vendedor.component.html',
  styleUrls: ['./ver-vendedor.component.css']
})
export class VerVendedorComponent implements OnInit {

  vendedor: Vendedor = new Vendedor();
  lista: Object = new Vendedor().roles;
  lista2: Venta = new Venta;
  lista3: Object = new Venta();
  error: any;
  listadeVentas:Venta[]=[];
  peqdidos:Object = [];
  
  constructor(
    private service: VendedorService,
    private serviceVenta: VentaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.traerId();
  }

  traerId(): any {
    this.route.params.subscribe((params) => {
      let id = params['cedulavendedor'];
      if (id) {
        this.service
          .verVendedor(id)
          .subscribe((vendedor) => (this.vendedor = vendedor));
        this.w(id);
        }
        this.serviceVenta.verVentaVendedor(id).subscribe((lista2) => (this.listadeVentas=lista2))
        this.serviceVenta.verPedidoVentaVendedor(id).subscribe((lista3) => (console.log(lista3)))
        return id;
    });
  }

  w(id:number){
    this.service.verVendedor(id).subscribe((vendedor) => (console.log(vendedor)))
  }
  

}
