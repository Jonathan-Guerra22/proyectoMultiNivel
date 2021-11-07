import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './components/categorias/categoria-form.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  
  {path:'categorias',component:CategoriasComponent},
  {path:'categorias/add',component:CategoriaFormComponent},

  {path:'productos',component:ProductosComponent},
  {path:'productos/form',component:ProductoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
