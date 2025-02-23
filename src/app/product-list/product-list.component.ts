import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  template: `
    <section>
      <h1>Product categories</h1>
    </section>
    <section class="categories">
      <ul>
        <li *ngFor="let product of productList">{{ product }}</li>
      </ul>
    </section>
  `,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productList = ['Телефоны и гаджеты', 'Бытовая техника', 'Мебель', 'Аптека'];

}
