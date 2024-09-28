import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changed");
  }

  @Input() product: any
  count: number = 0;
  isCartActivated:Boolean=false


  ngOnInit(): void {
    const { title, price, description } = this.product
    console.log("product", this.product)
  }

  addCart() {
    this.count++
    this.isCartActivated = true
  }

  add() {
    this.count++
  }

  trash() {
    this.count = 0
    this.isCartActivated = false
  }

  subtract() {
    this.count--
  }

}
