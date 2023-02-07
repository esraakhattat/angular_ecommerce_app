import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ProductsComponent } from './products/products.component';
import { IsOutofStockPipe } from './pipes/is-outof-stock.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ProductsComponent,
    IsOutofStockPipe,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
