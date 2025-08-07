import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UseProductsService } from 'src/app/hooks/use-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private useProducts: UseProductsService) {}

  ngOnInit(): void {
    this.useProducts.getProducts().subscribe((data) => {
      this.products = data;
      this.loading = false;
    });
  }
}
