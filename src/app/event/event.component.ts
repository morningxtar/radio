import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) {
  }

  id: any;
  events = [
    {
      id: 1,
      title: 'Réunion des animateurs de radio wobin',
      img: './assets/wobin/644b4e13-8e9b-476a-979f-e95c0b45cb3f.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
    {
      id: 2,
      title: 'Les autorités coutumières et chefs de communautés de Sinematiali sensibilises au covid 19',
      img: './assets/wobin/1f9f3f6c-4926-43e1-b48b-273206d88932.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
    {
      id: 3,
      title: 'Réunion avec le préfet de Sinematiali',
      img: './assets/wobin/86e3d2c3-e4f5-4b38-8fe1-f2b6ebb12370.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
    {
      id: 4,
      title: 'LA & FRUITS',
      img: './assets/WhatsApp Video 2020-06-07 at 11.01.24.mp4',
      date: 'Jan 20th, 2019',
      video: true
    },
  ];


  ngOnInit(): void {

    this.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
