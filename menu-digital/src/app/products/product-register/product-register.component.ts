import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from 'src/app/core/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {
  product = {} as Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProducts(form: NgForm) {
    this.productService.addProducts(this.product).subscribe(() => {
      this.cleanForm(form);
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.product = {} as Product;
  }
}
