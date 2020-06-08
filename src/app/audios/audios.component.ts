import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css']
})
export class AudiosComponent implements OnInit {

  constructor() {
  }

  audios = [
    {
    id: 0,
    title: 'DOUNOUYAN',
    img: './assets/headphone_audio.jpg',
    source: './assets/1.DOUNOUYAN K 01 5 20.MP3'
  },
    {
      id: 1,
      title: 'la voix du week-end',
      img: './assets/headphone_audio.jpg',
      source: './assets/2.la voix du week-end.MP3'
    },
    {
      id: 3,
      title: 'EXTRAIT LA VOIX WEEK END',
      img: './assets/headphone_audio.jpg',
      source: './assets/EXTRAIT LA VOIX WEEK END.MP3'
    },
    {
      id: 4,
      title: 'ceremonie de dons du pm et du députe-03 04',
      img: './assets/headphone_audio.jpg',
      source: './assets/fat-ceremonie de dons du pm et du députe-03 04 2020.MP3'
    },
  ];

  ngOnInit(): void {
  }
}
