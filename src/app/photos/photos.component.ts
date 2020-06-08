import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() {
  }

  images: Array<object> = [
    {
      image: './assets/photos/4f64cd0b-0b3c-4b0f-8a5a-2bbd1e6e53c1.jpg',
      thumbImage: './assets/photos/4f64cd0b-0b3c-4b0f-8a5a-2bbd1e6e53c1.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/5aade2e2-e22b-4062-ae39-3dbecd6bacbd.jpg',
      thumbImage: './assets/photos/5aade2e2-e22b-4062-ae39-3dbecd6bacbd.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/8fa71a0b-c3da-44e5-ac96-51cf1047bb8d.jpg',
      thumbImage: './assets/photos/8fa71a0b-c3da-44e5-ac96-51cf1047bb8d.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/9b6ff016-6b52-413f-89db-4d4538ad3d9f.jpg',
      thumbImage: './assets/photos/9b6ff016-6b52-413f-89db-4d4538ad3d9f.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/29fecdbf-c3e2-4537-abdf-1fe5fc6d467a.jpg',
      thumbImage: './assets/photos/29fecdbf-c3e2-4537-abdf-1fe5fc6d467a.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/8192ee29-8276-4571-92d4-5023ca97bf64.jpg',
      thumbImage: './assets/photos/8192ee29-8276-4571-92d4-5023ca97bf64.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/d93efd75-62a1-4cd6-a749-7158fbdb4efd.jpg',
      thumbImage: './assets/d93efd75-62a1-4cd6-a749-7158fbdb4efd.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/d454cd95-4620-4236-8001-122532c433f4.jpg',
      thumbImage: './assets/photos/d454cd95-4620-4236-8001-122532c433f4.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/e0ab4ac2-1e68-4094-8efc-4ba194639f2e.jpg',
      thumbImage: './assets/photos/e0ab4ac2-1e68-4094-8efc-4ba194639f2e.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
    {
      image: './assets/photos/IMG_20200606_145531_128.jpg',
      thumbImage: './assets/photos/IMG_20200606_145531_128.jpg',
      alt: 'alt of image',
      title: 'Elon Musk'
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true
  };

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  ngOnInit(): void {
  }

}
