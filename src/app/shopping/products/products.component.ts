import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any={
    isLoading:false,
    list:{},
    error:""
  };
  
  constructor(private productsService: ProductsService) {
  }
  ngOnInit(): void {
    this.getProducts();
  }


  private getProducts() {
    let url = "https://fakestoreapi.com/products";
    this.products.isLoading=true;
    this.productsService.getProducts(url).
      subscribe({
        next: (next) => {
          this.products.isLoading=false;
          this.products.list=next
          console.log(this.products.list)

        }, error: (e) => {
          this.products.isLoading=true;
          this.products.error=e
        }
      });
  }
}
