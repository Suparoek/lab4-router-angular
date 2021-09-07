import { Component, OnInit,ViewChild } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { ProductListComponent } from 'src/app/catalog/product-list/product-list.component';
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  constructor (private backendService: BackendService) {}
  @ViewChild('productList',{static:true})
  productList!: ProductListComponent;
  ngOnInit(): void {
      this.productList.products = this.backendService.getProducts();
  }
}
