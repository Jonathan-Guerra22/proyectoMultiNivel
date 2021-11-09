import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriaFormComponent } from './components/categorias/categoria-form.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { CompradoresComponent } from './components/compradores/compradores.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form.component';
import { VendedorFormComponent } from './components/vendedores/vendedor-form.component';
import { AdministradorFormComponent } from './components/administradores/administrador-form.component';
import { CompradorFormComponent } from './components/compradores/comprador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    ProductosComponent,
    CategoriaFormComponent,
    ProductoFormComponent,
    UsuarioComponent,
    VendedoresComponent,
    AdministradoresComponent,
    CompradoresComponent,
    UsuarioFormComponent,
    VendedorFormComponent,
    AdministradorFormComponent,
    CompradorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
