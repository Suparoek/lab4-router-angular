import { Component, OnInit,ViewChild,ViewChildren,QueryList} from '@angular/core';
import { Product } from '../../models/product';
import { ProductitemComponent } from '../productitem/productitem.component';
import { BackendService } from 'src/app/backend.service';

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

  constructor(private backendSerice:BackendService) 
  {
    this.products = [];
  }

  ngOnInit(): void {
     this.products = this.backendSerice.getProducts();
  }
  selectedProduct(productComponent:ProductitemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.ProductItems.forEach(p => {
    p.isSelected = false;
    });
    productComponent.isSelected = true;
    }
}
