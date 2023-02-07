import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private counter=new BehaviorSubject(0)
private quantity=new BehaviorSubject(0)
private subTotal=new BehaviorSubject(0)
private cartItems=new BehaviorSubject<Array<CartItem>>([])
counterVal = this.counter.asObservable();
quantityVal = this.quantity.asObservable();
subTotalVal = this.subTotal.asObservable();
cartItemsVals = this.cartItems.asObservable();
  constructor() {}
    changeCounter(newCounter: number) {
      this.counter.next(newCounter);
  }
    changeQuantity(newquantity: number) {
      this.quantity.next(newquantity);
  }
    changesubTotal(newSubTotal: number) {
      this.subTotal.next(newSubTotal);
  }
    addCartItems(cartItem: CartItem) {
      let cartItemArray=new Array<CartItem>
      // this.cartItems.push(cartItem)
      const current=this.cartItems.value
      const updated=[...current,cartItem]
      this.cartItems.next(updated);
  }
  removeCartItem(cartItem:CartItem) {
    this.cartItems.next(this.cartItems.value.filter(obj => obj !== cartItem));
}
  emptyCart(cartItem:CartItem[]) {
    this.cartItems.next(cartItem);
}
}