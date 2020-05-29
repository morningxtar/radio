import {Component, OnInit} from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  events = [
    {
      id: 1,
      title: 'Réunion des animateurs de radio wobin',
      img: 'assets/wobin/644b4e13-8e9b-476a-979f-e95c0b45cb3f.jpg',
      date: 'Jan 20th, 2019'
    },
    {
      id: 2,
      title: 'Les autorités coutumières et chefs de communautés de Sinematiali sensibilises au covid 19',
      img: 'assets/wobin/1f9f3f6c-4926-43e1-b48b-273206d88932.jpg',
      date: 'Jan 20th, 2019'
    },
    {
      id: 3,
      title: 'Réunion avec le préfet de Sinematiali',
      img: 'assets/wobin/86e3d2c3-e4f5-4b38-8fe1-f2b6ebb12370.jpg',
      date: 'Jan 20th, 2019'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
