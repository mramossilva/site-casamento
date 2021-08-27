import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { PhotosService } from './photos.service';
import { CountdownModule } from "./countdown/countdown.module";
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurHistoryComponent } from './home/our-history/our-history.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { RegistryComponent } from './registry/registry.component';
import { InformationComponent } from './information/information.component';
import { GroomsmenWeddingComponent } from './home/groomsmen-wedding/groomsmen-wedding.component';
import { TheBridesmaidComponent } from './home//the-bridesmaid/the-bridesmaid.component';
import { BridesmaidsComponent } from './home/bridesmaids/bridesmaids.component';
import { WeddingLadyAndPajenComponent } from './home/wedding-lady-and-pajen/wedding-lady-and-pajen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseNavbarDirective } from './collapse-navbar.directive';
import { TheAskComponent } from './home/the-ask/the-ask.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PresentsComponent } from './presents/presents.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'nosso-dia', component: InformationComponent},
  { path: 'registre-sua-presenca', component: RegistryComponent},
  { path: 'seguranca', component: SecurityComponent},
  { path: 'presentes', component: PresentsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurHistoryComponent,
    GalleryComponent,
    RegistryComponent,
    InformationComponent,
    GroomsmenWeddingComponent,
    TheBridesmaidComponent,
    BridesmaidsComponent,
    WeddingLadyAndPajenComponent,
    NavbarComponent,
    CollapseNavbarDirective,
    TheAskComponent,
    PresentsComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule, 
    CountdownModule,
    AgmCoreModule.forRoot({
      apiKey: 'Aqui vai sua GOOGLE API'
    })
  ],
  exports: [RouterModule],
  providers: [ PhotosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
