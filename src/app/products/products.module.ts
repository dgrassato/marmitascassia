import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './shared/product.service';

@NgModule({
    imports: [
        BrowserModule,
        ProductsRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
        ProductFormComponent
    ],
    providers: [ProductService]
})

export class ProductsModule {

}
