import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductListResolved, ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolver implements Resolve<ProductListResolved> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ProductListResolved> {

    return this.productService.getProducts()
      .pipe(
        map(product => ({ product })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );
  }

}
