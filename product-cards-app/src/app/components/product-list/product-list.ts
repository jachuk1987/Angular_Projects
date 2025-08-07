import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseProductsService } from '../../hooks/use-products';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // ✅ Now valid!
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: UseProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.loading = false;
    });
  }
}