import {Component, Input, OnInit} from '@angular/core';
import {range} from 'rxjs';

@Component({
  selector: 'app-programme-of-day',
  templateUrl: './programme-of-day.component.html',
  styleUrls: ['./programme-of-day.component.css']
})
export class ProgrammeOfDayComponent implements OnInit {

  constructor() {
  }

  @Input() dayPrograms: Array<object>;
  @Input() idProg: number;

  ngOnInit(): void {
  }

  test(program) {
    console.log(program);
  }
}
