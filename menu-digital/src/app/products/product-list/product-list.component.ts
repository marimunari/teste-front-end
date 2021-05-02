import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  error: any;
  filteredProducts: Product[] = [];
  _products: Product[] = [];
  _filterBy: string;
  currentPage: number = 1;
  counter: number = 8;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this._products = products;
      this.filteredProducts = this._products;
    },
    (error) => {
      this.error = error;
      console.error("erro: ", error)
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProducts();
    },
    (error) => {
      this.error = error;
      console.error("erro: ", error)
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredProducts = this._products.filter((product: Product) => 
                          product.title.toLocaleLowerCase()
                          .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter() {
    return this._filterBy;
  }

}
