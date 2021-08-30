import { Component, OnInit,ViewChild,ViewChildren,QueryList} from '@angular/core';
import { Product } from '../models/product';
import { ProductitemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // เพิ่มมา
    @ViewChildren(ProductitemComponent)
    ProductItems!:QueryList<ProductitemComponent>;
  // มีอยู่ก่อนแล้ว
   products: Product[];

  constructor() 
  {
    this.products=[];
   //ก่อน ​ViewCheid
    /*this.products.push({
    name: 'ส้มโอ',
    price: 990
    });
    this.products.push({
    name: 'แตงโม',
    price: 1000
    });
    this.products.push({
    name: 'มะพร้าวนํ้าหอม',
    price: 500
    });*/
  
  }

  ngOnInit(): void {}
  selectedProduct(productComponent:ProductitemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.ProductItems.forEach(p => {
    p.isSelected = false;
    });
    productComponent.isSelected = true;
    }
}
