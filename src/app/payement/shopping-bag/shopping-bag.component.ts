import {Component, OnInit} from '@angular/core';
import {CartService} from '../../_services/cart-service.service';


@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit {

  empty = true;
  myBooks = [];

  constructor(private cartService: CartService,
  ) {
  }

  ngOnInit() {
    this.empty = true;
    this.cartService.cartItemsSubject.subscribe(
      data => {
        this.myBooks = data;
        if (this.myBooks.length === 0) {
          this.empty = true;
        } else {
          this.empty = false;
        }
      });

  }


  removeBook(index: number) {
    this.cartService.removeFromCart(index);
  }

  total() {
    var total = 0;
    let i;
    for (i = 0; i < this.myBooks.length; i++) {
      total += this.myBooks[i].quantity * this.myBooks[i].price;
    }
    return total;
  }
}
