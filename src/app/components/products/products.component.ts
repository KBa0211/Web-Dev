import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 13 white',
      description: 'Apple iPhone 13 с 128 ГБ памяти.',
      image: 'https://sanmi.kz/upload/iblock/120/apple-iphone-13-128gb-belyj-102298420-1.jpg',
      rating: 4.8,
      link: 'http://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/'
    },
    {
      name: 'iPhone 16 ',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 ',
      description: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    }
    ,
    {
      name: 'Наушники OEM ',
      description: 'Наушники OEM P9 серебристый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000'
    },
    {
      name: 'Apple Watch',
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
      name: 'Чехол ',
      description: 'Чехол Для Apple iPhone 15 Pro прозрачный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hea/83724869828638.jpg?format=gallery-medium',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      name: 'Стиральная машина LG',
      description: 'Стиральная машина LG F2J3NS0W белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000'
    },  
    {
      name: 'Пылесос Samsung ',
      description: 'Пылесос Samsung VCC4520S36/XEV синий',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000'
    },
    {
      name: 'Робот-пылесос',
      description: 'Робот-пылесос Xiaomi Robot Vacuum S20 BHR8629EU белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/had/86299588788254.jpg?format=gallery-medium',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-bhr8629eu-belyi-120489305/?c=750000000'
    },
    {
      name: 'Кухонный комбайн',
      description: 'Кухонный комбайн KENWOOD KCL95.004SI Cooking Chef XL серебристый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/he4/63921091969054.jpg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000'
    },
    {
      name: 'Электрочайник',
      description: 'Электрочайник NEG YD-2035 бежевый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pf2/12006101.png?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/elektrochainik-neg-yd-2035-bezhevyi-121703269/?c=750000000'
    },
    {
      name: 'Кофемашина',
      description: 'Кофемашина SOKANY SK-6862 серебристый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p3b/7463539.jpg?format=gallery-medium',
      rating: 4.45,
      link: 'https://kaspi.kz/shop/p/kofemashina-sokany-sk-6862-serebristyi-109791914/?c=750000000'
    }
  ];

  shareOnWhatsApp(link: string) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=Посмотри%20этот%20товар:%20${encodeURIComponent(link)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(link: string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=Посмотри%20этот%20товар`;
    window.open(telegramUrl, '_blank');
  }
}
