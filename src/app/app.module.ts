import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';

import { ProductosComponent } from './productos/productos.component';

import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LoginComponent,
    CarritoComponent,
    ProductosComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
