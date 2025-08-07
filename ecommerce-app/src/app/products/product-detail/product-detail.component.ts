
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(+id!).subscribe((res) => {
      this.product = res;
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.toastr.success('Added to cart');
  }
}
