import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<void>();

  removeProduct() {
    this.remove.emit();
  }

  likeProduct() {
    this.product.likes++;
  }

  shareOnWhatsApp(link: string) {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(link: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(url, '_blank');
  }

}