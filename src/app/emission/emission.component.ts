import {Component, OnInit} from '@angular/core';
import {AES, enc} from 'crypto-ts';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.css']
})
export class EmissionComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) {
  }
  key: any;

  mediaOfEmission = [];
  emissions = [
    {
      id: 0,
      title: 'Coq De La Bagoue',
      img: './assets/coq/3d3d264a-8ba6-4119-816b-aeae35ddb10a.jpg',
      date: '11/08/2020',
      source: './assets/coq/WhatsApp Audio 2020-08-14 at 23.31.43.mp4',
      key: 'coq-de-la-bagoue',
    },
  ];

  ngOnInit(): void {
    this.key = this.activatedroute.snapshot.paramMap.get('id');
    this.mediaOfEmission = this.emission(this.key);
  }

  emission(key){
    return this.emissions.filter(item => item.key === key);
  }
}
