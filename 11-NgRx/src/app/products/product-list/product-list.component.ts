import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { getCurrentProduct, getProducts, getShowProductCode, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  // local - changing to use store
  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private store: Store<State>, private productService: ProductService) { }

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   currentProduct => this.selectedProduct = currentProduct
    // );

    // we should unsubscribe
    this.store.select(getCurrentProduct).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: err => this.errorMessage = err
    });

    // don't forget to unsubscribe
    // this.store.select('products').subscribe(
    //   products => {
    //     if (products) {
    //       this.displayCode = products.showProductCode;
    //     }
    //   });
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  checkChanged(): void {
    // this.displayCode = !this.displayCode;
    // this.store.dispatch({
    //   type: '[Product] Toggle Product Code'}
    // );
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    //this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    //this.productService.changeSelectedProduct(product);
    this.store.dispatch(ProductActions.setCurrentProduct({product}));
  }
}
