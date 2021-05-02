import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductModule } from './products/product.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
},
{
  path: 'products',
  children: [
    {
      path: '',
      component: ProductListComponent
    },
    {
      path: 'register',
      children: [
        {
          path: '',
          component: ProductRegisterComponent
        }
      ]
    }
  ]
},
{ 
  path: '**', 
  component: Error404Component
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
