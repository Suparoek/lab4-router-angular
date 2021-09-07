import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { PanelComponent } from './panel/panel.component';
import { Product } from '../models/product';
import { RouterModule } from '@angular/router';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [ProductListComponent,ProductitemComponent,PanelComponent],
  imports: [
    CommonModule,RouterModule
  ],
  providers:[BackendService],
  exports:[ProductListComponent,ProductitemComponent,PanelComponent]
})
export class CatalogModule { }
