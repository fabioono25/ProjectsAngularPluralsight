import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './../shared/star.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    // RouterModule.forChild([
    //   {path: 'products', component: ProductListComponent},
    //   {path: 'products/:id',
    //     canActivate: [ProductDetailGuard],
    //     component: ProductDetailComponent}
    // ]),
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
