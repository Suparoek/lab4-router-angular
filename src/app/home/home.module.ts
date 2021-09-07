import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CatalogModule } from '../catalog/catalog.module';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [
    NavbarComponent,
    MaincontentComponent
  ],
  imports: [
    CommonModule,CatalogModule
  ],
  exports:[NavbarComponent,MaincontentComponent],
  providers:[BackendService ],
})
export class HomeModule { }
