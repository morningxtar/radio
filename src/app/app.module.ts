import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MediasComponent } from './medias/medias.component';
import { NewsComponent } from './news/news.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { AccueilComponent } from './accueil/accueil.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {FormsModule} from '@angular/forms';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ProgrammeOfDayComponent } from './programme-of-day/programme-of-day.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { DedicacesComponent } from './dedicaces/dedicaces.component';
import { ContactComponent } from './contact/contact.component';
import { PageDescriptionComponent } from './page-description/page-description.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ShowsComponent } from './shows/shows.component';
import { EventComponent } from './event/event.component';
import { PhotosComponent } from './photos/photos.component';
import { AudiosComponent } from './audios/audios.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'medias', component: MediasComponent },
  { path: 'medias/photos', component: PhotosComponent },
  { path: 'medias/audios', component: AudiosComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'equipes', component: TeamsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'evenements', component: EventsComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'evenements/evenement/:id', component: EventComponent },
  { path: 'accueil/evenement/:id', component: EventComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MediasComponent,
    NewsComponent,
    ProgrammeComponent,
    ProgrammesComponent,
    AccueilComponent,
    ProgrammeOfDayComponent,
    NavbarComponent,
    FooterComponent,
    TeamComponent,
    TeamsComponent,
    DedicacesComponent,
    ContactComponent,
    PageDescriptionComponent,
    AboutComponent,
    EventsComponent,
    ShowsComponent,
    EventComponent,
    PhotosComponent,
    AudiosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgImageSliderModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
