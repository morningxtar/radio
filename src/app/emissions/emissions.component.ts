import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.css']
})
export class EmissionsComponent implements OnInit {

  constructor() {
  }

  emissions = [
    {
      id: 0,
      title: 'Coq De La Bagoue',
      img: './assets/coq/3d3d264a-8ba6-4119-816b-aeae35ddb10a.jpg',
      date: '11/08/2020',
      key: 'coq-de-la-bagoue',
    },
    {
      id: 1,
      title: 'Coq De La Bagoue',
      img: './assets/coq/3d3d264a-8ba6-4119-816b-aeae35ddb10a.jpg',
      date: '11/08/2020',
      key: 'coq-de-la-bagoue',
    },
  ];

  ngOnInit(): void {
  }

}
