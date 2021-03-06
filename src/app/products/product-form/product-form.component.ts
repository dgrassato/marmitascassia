import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
  })

  export class ProductFormComponent implements OnInit {
    constructor(private productService: ProductService,
      private route: ActivatedRoute,
      private location: Location,
      private router : Router) { }
    model: Product = null;
    isNew: boolean;
    //TODO:get categories from DB
    categories = ['Marmita', 'Bebida', 'Outro'];
    submitted = false;
    newProduct() {
      this.model = new Product();
    }
    onSubmit() {
      this.productService.updateProduct(this.model, this.isNew)
      .then(_ => {
        this.submitted = true;
        if (this.isNew) {

          this.router.navigate([`/products`]);

        } else {

          this.router.navigate([`products/detail/${this.model.$key}`]);

        }

      });
    }
    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        if(params['id']) {
          this.isNew = false;
          this.route.params
            .map(params => params['id'])
            .switchMap(id => this.productService.getProduct(id))
            .subscribe(product =>
              this.model = product
            );
        } else {

          this.isNew = true;
          this.newProduct();
        }
      });

    }
  }
