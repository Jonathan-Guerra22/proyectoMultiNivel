import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto = new Producto();
  error: any;
  listaCategorias:Categoria[] = [];

  private imagenSeleccionada!: File;


  constructor(
    private service: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editar();
    this.listarCategoria();
  }
  
  listarCategoria(){
    this.service.listarCategoriasProductos().subscribe((list) => (this.listaCategorias = list));
  }
  crear() {
    if (!this.imagenSeleccionada) {
      this.service.crearProducto(this.producto).subscribe(
        (producto) => {
          Swal.fire(
            'Nuevo!',
            `El Producto ${producto.nombreproducto} ha sido registrado con exito`,
            'success'
          );
          this.router.navigate(['/productos']);
        },
        (err) => {
          if (err.status === 400) {
            this.error = err.error;
          }
        }
      );
    } else {
      this.service
        .crearConImagen(this.producto, this.imagenSeleccionada)
        .subscribe(
          (producto) => {
            Swal.fire(
              'Nuevo!',
              `El Producto ${producto.nombreproducto} ha sido registrado con exito`,
              'success'
            );
            this.router.navigate(['/productos']);
          },
          (err) => {
            if (err.status === 400) {
              this.error = err.error;
            }
          }
        );
    }
  }

  editar(): void {
    this.route.params.subscribe((params) => {
      let id = params['idproducto'];

      if (id) {
        this.service
          .verProducto(id)
          .subscribe((producto) => (this.producto = producto));
      }
    });
  }

  modificar() {
    if (this.imagenSeleccionada==null) {
      this.service.modificarProducto(this.producto).subscribe(
        (producto) => {
          Swal.fire(
            'Modificado',
            `El Producto ${producto.nombreproducto} ha sido modificado`,
            'success'
          );
          this.router.navigate(['/productos']);
        },
        (err) => {
          if (err.status === 400) {
            this.error = err.error;
          }
        }
      );
    } else {
      this.service
        .modificarConImagen(this.producto, this.imagenSeleccionada)
        .subscribe(
          (producto) => {
            Swal.fire(
              'Modificado',
              `El Producto ${producto.nombreproducto} ha sido modificado`,
              'success'
            );
            this.router.navigate(['/productos']);
          },
          (err) => {
            if (err.status === 400) {
              this.error = err.error;
            }
          }
        );
    }
  }

  seleccionarImagen(event: any): void {
    this.imagenSeleccionada = event.target.files[0];
    console.log(this.imagenSeleccionada);
  }


}
