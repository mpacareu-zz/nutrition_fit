import { Component } from '@angular/core';
import { ProductsServiceService} from '../services/products-service.service'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {

  products: any [] = [];
  constructor( private productsService:ProductsServiceService) { 
    this.productsService.getProducts()
    .subscribe((data:any) =>{
      console.log(data);
      this.products = data;
      console.log(this.products);
    })
  }


}
