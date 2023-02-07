import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { CounterService } from '../services/counter.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() product: Product = {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    title: ""
  }
  totalQuantity:number=0
  counter: number = 0
  subTotal: number = 0
  showAlert = false
  cartItems: CartItem[] = []
  cartProduct: CartItem = { "id": 0, "title": "", "description": "", "price": 0, "quantity": 0, "image": "" }
  constructor(private counterService: CounterService, private productService: ProductsService) { }
  ngOnInit() {
    this.counterService.counterVal.subscribe((count) => (this.counter = count));
    this.counterService.quantityVal.subscribe((totalQuantity) => (this.totalQuantity = totalQuantity));
    this.counterService.subTotalVal.subscribe((subTotal) => (this.subTotal = subTotal));
    this.counterService.cartItemsVals.subscribe((items) => this.cartItems = items)
  }
  addToCart() {
    this.productService.getSingleProduct(this.product.id).subscribe((res: any) => {
      this.cartProduct = this.cartItems.find(
        (productItem: CartItem) => productItem.id == res.id
      ) || this.cartProduct;      
      this.showAlert = true;
      setTimeout(() => this.showAlert = false, 3000)
      this.counterService.changeQuantity(++this.totalQuantity) 
      console.log(this.totalQuantity);
      
      if(this.cartProduct.id==0){  
      
      this.counterService.changeCounter(++this.counter)
      const singleItem: CartItem = {
        "id": res.id,
        "title": res.title,
        "description": res.description,
        "price": res.price,
        "image": res.image,
        "quantity": 1
      }
      this.counterService.changesubTotal(Math.round((this.subTotal+singleItem.price)*100)/100)
      this.counterService.addCartItems(singleItem)
      }
      else{
        this.counterService.changesubTotal(Math.round((this.subTotal+this.cartProduct.price)*100)/100)
        this.cartProduct.quantity++
      }  
        })
      // console.log(this.counterService.cartItemsVals);
    }
  }

