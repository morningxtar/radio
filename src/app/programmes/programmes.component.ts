import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  programs: Array<Array<object>> = [
    [
      {
        hour: '14h',
        title: 'business',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Fugit voluptas iusto maiores temporibus autem numquam magnam.',
        author: 'Brenden Legros',
      },
      {
        hour: '15h',
        title: 'Explicabo et rerum quis et ut ea.',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Maiores dignissimos neque qui cum accusantium ut sit sint inventore.',
        author: 'Hubert Hirthe',
      },
      {
        hour: '14h',
        title: 'business',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'assets/background/istockphoto-1138395421-612x612.jpg',
        author: 'assets/background/istockphoto-1138395421-612x612.jpg',
      },
      {
        hour: '16h30',
        title: 'Qui non qui vel amet culpa sequi.',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Nam ex distinctio voluptatem doloremque suscipit iusto.',
        author: 'Jack Christiansen',
      },
      {
        hour: '18h45',
        title: 'Quos ratione neque expedita asperiores.',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Eligendi quo eveniet est nobis et ad temporibus odio quo.',
        author: 'Alejandrin Littel',
      },
      {
        hour: '20h',
        title: 'Quo qui praesentium nesciunt',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Voluptatem et alias dolorum est aut sit enim neque veritatis.',
        author: 'Willow Trantow',
      }],
    [
      {
        hour: '14dh',
        title: 'business',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Fugit voluptas iusto maiores temporibus autem numquam magnam.',
        author: 'Brenden Legros',
      },
      {
        hour: '15h',
        title: 'Explicabo et rerum quis et ut ea.',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Maiores dignissimos neque qui cum accusantium ut sit sint inventore.',
        author: 'Hubert Hirthe',
      },
      {
        hour: '14h',
        title: 'business',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'assets/background/istockphoto-1138395421-612x612.jpg',
        author: 'assets/background/istockphoto-1138395421-612x612.jpg',
      },
      {
        hour: '16h30',
        title: 'Qui non qui vel amet culpa sequi.',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Nam ex distinctio voluptatem doloremque suscipit iusto.',
        author: 'Jack Christiansen',
      },
      {
        hour: '18h45',
        title: 'Quos ratione neque expedita asperiores.',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Eligendi quo eveniet est nobis et ad temporibus odio quo.',
        author: 'Alejandrin Littel',
      },
      {
        hour: '20h',
        title: 'Quo qui praesentium nesciunt',
        img: 'assets/background/istockphoto-1138395421-612x612.jpg',
        content: 'Voluptatem et alias dolorum est aut sit enim neque veritatis.',
        author: 'Willow Trantow',
      }],
  ];
  idProg = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  fonction(i: number) {
    this.idProg = i;
  }

  indexToDay(index) {
    return this.days[index];
  }
}
