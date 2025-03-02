import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AlbumPhotosComponent {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(id).subscribe(data => {
      // Заменяем ссылки на dummyimage.com
      this.photos = data.map(photo => ({
        ...photo,
        url: photo.url.replace('via.placeholder.com', 'dummyimage.com')
      }));
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
