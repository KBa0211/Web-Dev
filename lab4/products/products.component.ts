import { Component } from '@angular/core';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://kaspi.kz/example1.jpg',
      name: 'Exclusive Product 1',
      description: 'High-quality product with great features.',
      rating: 4.7,
      link: 'https://kaspi.kz/exclusive-product-1',
      gallery: [
        'https://kaspi.kz/example1-1.jpg',
        'https://kaspi.kz/example1-2.jpg',
        'https://kaspi.kz/example1-3.jpg'
      ]
    },
    {
      image: 'https://kaspi.kz/example2.jpg',
      name: 'Exclusive Product 2',
      description: 'Latest technology with premium quality.',
      rating: 4.6,
      link: 'https://kaspi.kz/exclusive-product-2',
      gallery: [
        'https://kaspi.kz/example2-1.jpg',
        'https://kaspi.kz/example2-2.jpg',
        'https://kaspi.kz/example2-3.jpg'
      ]
    }
  ];

  share(product: Product, platform: string) {
    const encodedUrl = encodeURIComponent(product.link);
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedUrl}`;
    }
    window.open(shareUrl, '_blank');
  }
}
