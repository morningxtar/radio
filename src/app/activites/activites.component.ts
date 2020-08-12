import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  constructor() { }

  activites: Array<object> = [
    {activite: 'Réalisation de l’émission mieux s’exprimer du 03 Août 2020'},
    {activite: 'Réalisation de l’émission les p’tits champions du 05 Août 2020'},
    {activite: 'Réalisation de l’émission woloniri du 05 Août 2020'},
    {activite: 'Réalisation de l’émission la voix du week-end de 07 Août 2020'},
    {activite: 'Réalisation de l’émission la belle affaire du 08 Août 2020'},
    {activite: 'Réalisation de l’émission 100% hip hop du 09 Août 2020'},
  ];
  ngOnInit(): void {
  }

}
