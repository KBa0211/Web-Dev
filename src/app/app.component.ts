import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ProductsComponent, ProductListComponent],  
})
export class AppComponent {
  title = 'kaspi-products';
}
