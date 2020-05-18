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

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'medias', component: MediasComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'team', component: TeamComponent },
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
    TeamComponent
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
