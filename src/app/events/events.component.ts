import {Component, OnInit, ViewChild} from '@angular/core';
import { AES } from 'crypto-ts';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [
    {
      id: this.encrypt(1),
      title: 'Remise de kits sanitaires aux populations de sinematiali par le préfet',
      img: './assets/fatou/remiseKitsSanitaire/9cb63e68-79e3-4ed7-a2e7-0446f0f89cb7.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
    {
      id: this.encrypt(2),
      title: 'Reportage de fatou fofana sur la transformation de la mangue',
      img: './assets/fatou/transformationMangue/2242f2e3-9575-4a76-bfbb-d57d19f29e34.jpg',
      date: 'Jan 20th, 2019',
      auteur: 'Fatou Fofana',
      video: true
    },
    {
      id: this.encrypt(3),
      title: 'Tournée du préfet de sinematiali pour suivre le respect des mesures barrières',
      img: './assets/fatou/prefetMesBarr/ef879edc-245e-478a-97a0-0369bd3b499a.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
    {
      id: this.encrypt(4),
      title: 'Séminaire de formation OMS sur la covid 19 à korhogo',
      img: './assets/fatou/seminaireOMSCovidKorho/0a237255-5c11-4d1c-b7ac-a749a3386d4a.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  encrypt(element){
    return AES.encrypt(element.toString(), 'test').toString();
  }
}
