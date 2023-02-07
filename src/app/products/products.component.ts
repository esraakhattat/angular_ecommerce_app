import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import productsList from '../../assets/data/products.json'
import { ProductsService } from '../services/products.service';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any = {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    title: ""
  }
  constructor(private prouctService: ProductsService, private counterService:CounterService) { }
  ngOnInit() {
    this.prouctService.getProducts().subscribe((res: any) => {
      this.products = res
      console.log(this.products);
    })
    // addToCart() {
    //   this.showAlert=true;
    //   setTimeout(()=>this.showAlert=false,3000)
    //   this.counterService.changeCounter(++this.counter)
    //   this.productService.getSingleProduct(this.product.id).subscribe((res:any) =>{
    //     this.cartItems.push(res)
    //     console.log(res);
        
    //     })
    //     console.log(this.cartItems);
    // }

  }
}
