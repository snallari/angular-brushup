import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ProductsComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { SingleProductComponent } from './single-product/single-product.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductsComponent,
     SingleProductComponent
  ],
  imports: [
    ShoppingRoutingModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ]
})
export class ShoppingModule { }
