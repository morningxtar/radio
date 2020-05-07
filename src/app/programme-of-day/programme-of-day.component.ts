import {Component, OnInit} from '@angular/core';
import {range} from 'rxjs';

@Component({
  selector: 'app-programme-of-day',
  templateUrl: './programme-of-day.component.html',
  styleUrls: ['./programme-of-day.component.css']
})
export class ProgrammeOfDayComponent implements OnInit {

  constructor() {
  }

  programs: Array<object> = [{
    hour: '14h',
    title: 'business',
    img: 'assets/background/istockphoto-1138395421-612x612.jpg'
  },
    {
      hour: '15h',
      title: 'politique',
      img: 'assets/background/pexels-photo-949587.jpeg'
    },
    {
      hour: '16',
      title: 'agriculture',
      img: 'assets/background/preview-206030-kpXazj5mlP-high_0001.jpg'
    },
    {
      hour: '17',
      title: 'agriculture',
      img: 'assets/background/preview-206030-kpXazj5mlP-high_0001.jpg'
    },
    {
      hour: '17',
      title: 'agriculture',
      img: 'assets/background/preview-206030-kpXazj5mlP-high_0001.jpg'
    },
    {
      hour: '17',
      title: 'agriculture',
      img: 'assets/background/preview-206030-kpXazj5mlP-high_0001.jpg'
    }];

  programSize = Math.ceil(this.programs.length / 3) ;

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
    console.log(range(0, this.programSize));
  }

  test(program) {
    console.log(program);
  }
}
