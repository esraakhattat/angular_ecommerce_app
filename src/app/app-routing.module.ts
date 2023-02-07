import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'auth/sign-up',
    component:SignUpComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'product-details/:id',
    component:ProductDetailComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
