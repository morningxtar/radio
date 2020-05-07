import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() {
  }

  imageObject: Array<object> = [{
    image: 'assets/ELONMUSK.jpg',
    thumbImage: 'assets/ELONMUSK.jpg',
    alt: 'alt of image',
    title: 'Elon Musk'
  }, {
    image: 'assets/dragoncrew.8k.jpg', // Support base64 image
    // thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
    title: 'Space X', // Optional: You can use this key if want to show image with title
    alt: 'Image alt' // Optional: You can use this key if want to show image with alt
  }
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

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  ngOnInit(): void {
  }
}
