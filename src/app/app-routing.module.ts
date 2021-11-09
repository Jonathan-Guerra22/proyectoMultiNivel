import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './components/categorias/categoria-form.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form.component';
import { VendedorFormComponent } from './components/vendedores/vendedor-form.component';
import { AdministradorFormComponent } from './components/administradores/administrador-form.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  
  {path:'categorias',component:CategoriasComponent},
  {path:'categorias/add',component:CategoriaFormComponent},

  {path:'productos',component:ProductosComponent},
  {path:'productos/form',component:ProductoFormComponent},
  {path:'productos/form/:idproducto',component:ProductoFormComponent},

  {path:'usuarios',component:UsuarioComponent},
  {path:'usuarios/form',component:UsuarioFormComponent},

  {path:'vendedores',component:VendedoresComponent},
  {path:'vendedores/form',component:VendedorFormComponent},

  {path:'administrador',component:AdministradoresComponent},
  {path:'administrador/form',component:AdministradorFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
