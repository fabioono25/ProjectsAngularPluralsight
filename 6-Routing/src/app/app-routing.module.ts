import { SelectiveStrategy } from './selective-strategy.service';
import { AuthGuard } from './user/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, CanActivate } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const ROUTES = [
      { path: 'welcome', component: WelcomeComponent },
      {
          path: 'products',
          //canLoad: [AuthGuard],
          canActivate: [AuthGuard],
          data: { preload: true },
          loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: true,
    //  preloadingStrategy: PreloadAllModules
    preloadingStrategy: SelectiveStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
