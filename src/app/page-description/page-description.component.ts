import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css'],
})
export class PageDescriptionComponent implements OnInit {

  @Input() title: number;
  @Input() img: string;

  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  constructor() {
  }

  ngOnInit(): void {
  }

}
