import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { Error404Component } from '../shared/components/error404/error404.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductRegisterComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class ProductModule { }
