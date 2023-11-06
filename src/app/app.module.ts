import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './core/components/contact-form/contact-form.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SliderComponent } from './core/components/slider/slider.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { EuropeComponent } from './pages/europe/europe.component';
import { ItalyComponent } from './pages/europe/italy/italy.component';
import { SpainComponent } from './pages/europe/spain/spain.component';
import { HomeComponent } from './pages/home/home.component';
import { LastBlogsComponent } from './pages/last-blogs/last-blogs.component';
import { PatreonComponent } from './pages/patreon/patreon.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'spain', component: SpainComponent },
  { path: 'italy', component: ItalyComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'asia', component: AsiaComponent },
  { path: 'last-blogs', component: LastBlogsComponent },
  { path: 'patreon', component: PatreonComponent },
  { path: 'about-us', component: AboutUsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ContactFormComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
