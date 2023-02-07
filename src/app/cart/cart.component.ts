import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../interfaces/cart-item';
import { CounterService } from '../services/counter.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  counter: number = 0;
  totalQuantity: number = 0;
  subTotal: number = 0;
  emptyCart: boolean = !this.counter;
  checkoutToggle:boolean=false;
  alreadyToggle:boolean=false;
  cartProduct: CartItem = { "id": 0, "title": "", "description": "", "price": 0, "quantity": 0, "image": "" }
  constructor(private activatedRoute: ActivatedRoute, private counterService: CounterService, private productService: ProductsService) { }
  ngOnInit(): void {
    this.counterService.counterVal.subscribe((count) => (this.counter = count));
    this.counterService.cartItemsVals.subscribe((items) => this.cartItems = items);
    this.counterService.subTotalVal.subscribe((res) => (this.subTotal = res));
    this.counterService.quantityVal.subscribe((res) => (this.totalQuantity = res));
    console.log(this.totalQuantity);

    this.emptyCart = !this.totalQuantity;
  }
  removeItem(item: CartItem) {
    console.log(item);

    this.counterService.changeCounter(--this.counter)
    const newQuantity = this.totalQuantity - item.quantity
    const newTotal =Math.round((this.subTotal - (item.price * item.quantity))*100)/100
    this.counterService.changesubTotal(newTotal)
    this.counterService.changeQuantity(newQuantity)
    this.counterService.removeCartItem(item)
    this.emptyCart = !this.totalQuantity;
  }
  increaseQuantity(item: CartItem) {
    this.productService.getSingleProduct(item.id).subscribe((res: any) => {
      this.cartProduct = this.cartItems.find(
        (productItem: CartItem) => productItem.id == res.id
      ) || this.cartProduct;

      this.counterService.changesubTotal(Math.round((this.subTotal + this.cartProduct.price) * 100) / 100)
      this.counterService.changeQuantity(++this.totalQuantity)
      this.cartProduct.quantity++
    })
  }

  decreaseQuantity(item: CartItem) {
    this.productService.getSingleProduct(item.id).subscribe((res: any) => {
      this.cartProduct = this.cartItems.find(
        (productItem: CartItem) => productItem.id == res.id
      ) || this.cartProduct;

      if (this.cartProduct.quantity === 1) {
        this.removeItem(item)
      }
      else {
        this.counterService.changesubTotal(Math.round((this.subTotal - this.cartProduct.price) * 100) / 100)
        this.cartProduct.quantity--
        this.counterService.changeQuantity(--this.totalQuantity)
      }
    })
  }
  checkOut(){
    if(this.totalQuantity==0) {
      this.alreadyToggle=true
      setTimeout(() => this.alreadyToggle = false, 3000)
    }

else{
    this.counterService.emptyCart([])
    this.counterService.changeCounter(0)
    this.counterService.changesubTotal(0)
    this.counterService.changeQuantity(0)
    this.emptyCart = !this.totalQuantity;
    this.checkoutToggle = true;
      setTimeout(() => this.checkoutToggle = false, 3000)
  }
}
}
