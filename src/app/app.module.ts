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

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'medias', component: MediasComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'equipes', component: TeamsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'evenemnts', component: EventsComponent },
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
    EventsComponent
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
