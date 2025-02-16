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
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max 256GB',
      description: 'Powerful smartphone with an advanced camera and performance.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/h99/87295491702815.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h43/h100/87295491702816.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
      name: 'Thunderobot 911 X Wild Hunter G2L',
      description: 'Gaming laptop with powerful specs for high performance.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h98/85277334405151.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/h99/85277334405152.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-medium',
      name: 'Samsung QE55Q60D',
      description: '55-inch Smart TV with 4K UHD resolution and HDR.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-qe55q60dauxce-140-sm-seryi-119285285/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h22/85990957187103.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h23/85990957187104.jpg?format=gallery-medium'
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
