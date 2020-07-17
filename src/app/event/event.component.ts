import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };

  constructor(private activatedroute: ActivatedRoute) {
  }

  id: any;
  events = [
    {
      id: 1,
      title: 'Remise de kits sanitaires aux populations de sinematiali par le préfet',
      img: './assets/fatou/remiseKitsSanitaire/9cb63e68-79e3-4ed7-a2e7-0446f0f89cb7.jpg',
      date: 'Jan 20th, 2019',
      auteur: 'Fatou Fofana',
      video: false
    },
    {
      id: 2,
      title: 'Reportage de fatou fofana sur la transformation de la mangue',
      img: './assets/fatou/transformationMangue/1f9f3f6c-4926-43e1-b48b-273206d88932.jpg',
      date: 'Jan 20th, 2019',
      videoSrc: './assets/WhatsApp Video 2020-06-07 at 11.01.24.mp4',
      auteur: 'Fatou Fofana',
      video: true
    },
    {
      id: 3,
      title: 'Tournée du préfet de sinematiali pour suivre le respect des mesures barrières',
      img: './assets/fatou/prefetMesBarr/ef879edc-245e-478a-97a0-0369bd3b499a.jpg',
      date: 'Jan 20th, 2019',
      auteur: 'Fatou Fofana',
      video: false
    },
    {
      id: 4,
      title: 'Séminaire de formation OMS sur la covid 19 à korhogo',
      img: './assets/fatou/seminaireOMSCovidKorho/0a237255-5c11-4d1c-b7ac-a749a3386d4a.jpg',
      date: 'Jan 20th, 2019',
      video: false
    },
  ];

  eventsPhotos = [
    {
    id: 1,
    photos: [
      './assets/fatou/remiseKitsSanitaire/3f88aa08-ac52-4c59-b8d6-4908656ee871.jpg',
      './assets/fatou/remiseKitsSanitaire/4ca20f93-50fd-46ac-9f38-6bcdffe5017d.jpg',
      './assets/fatou/remiseKitsSanitaire/9cb63e68-79e3-4ed7-a2e7-0446f0f89cb7.jpg',
      './assets/fatou/remiseKitsSanitaire/29eef2a4-2471-4299-8e0a-961817d3990d.jpg',
      './assets/fatou/remiseKitsSanitaire/62d5d3dd-1411-4cf8-80ea-99b5095351a0.jpg',
    ]
  },
    {
      id: 2,
      photos: [
        './assets/fatou/transformationMangue/32fee927-8288-4852-bd97-fa240aa30ea0.jpg',
        './assets/fatou/transformationMangue/90e389af-962c-4959-a033-61287781f294.jpg',
        './assets/fatou/transformationMangue/2242f2e3-9575-4a76-bfbb-d57d19f29e34.jpg',
        './assets/fatou/transformationMangue/40305824-7755-41ec-b9da-7669621dcd35.jpg',
        './assets/fatou/transformationMangue/da82ceb0-0178-47f2-b902-812145c0f27d.jpg',
      ]
    },
    {
      id: 3,
      photos: [
        './assets/fatou/prefetMesBarr/ef879edc-245e-478a-97a0-0369bd3b499a.jpg',
        './assets/fatou/prefetMesBarr/1a2cdfdf-bb96-4175-ba41-89ff58148a5f.jpg',
        './assets/fatou/prefetMesBarr/c6e48090-f55d-4c9e-9a9f-b0db318fb8a2.jpg',
      ]
    },
    {
      id: 4,
      photos: [
        './assets/fatou/seminaireOMSCovidKorho/0a237255-5c11-4d1c-b7ac-a749a3386d4a.jpg',
        './assets/fatou/seminaireOMSCovidKorho/3bb77b6f-7046-499c-af9f-1a15de91211f.jpg',
        './assets/fatou/seminaireOMSCovidKorho/409f107f-c871-4eeb-b46e-c9affd62f2aa.jpg',
        './assets/fatou/seminaireOMSCovidKorho/419fa918-7894-4dc0-ab54-c4cfd8527972.jpg',
        './assets/fatou/seminaireOMSCovidKorho/b1bbe276-d7e3-474b-b143-c72c35396b08.jpg',
      ]
    },
  ];


  ngOnInit(): void {

    this.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
