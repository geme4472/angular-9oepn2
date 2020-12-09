import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

import { products } from "../products";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeFromCart(product) {
    this.cartService.clearCart(product);
    window.alert("Remnoved!");
  }
}
