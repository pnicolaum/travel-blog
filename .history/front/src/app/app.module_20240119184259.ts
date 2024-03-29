import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { BlogCreationComponent } from './core/components/blog-creation/blog-creation.component';
import { BlogDetailDisplayComponent } from './core/components/blog-detail-display/blog-detail-display.component';
import { ContactFormComponent } from './core/components/contact-form/contact-form.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ImageUploadComponent } from './core/components/image-upload/image-upload.component';
import { LoginComponent } from './core/components/login/login.component';
import { SliderComponent } from './core/components/slider/slider.component';
import { SubscriptionComponent } from './core/components/subscription/subscription.component';

// Pages
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { BlogCreationAdminComponent } from './pages/blog-creation-admin/blog-creation-admin.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { EuropeComponent } from './pages/europe/europe.component';
import { ItalyComponent } from './pages/europe/italy/italy.component';
import { SpainComponent } from './pages/europe/spain/spain.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { LastBlogsComponent } from './pages/last-blogs/last-blogs.component';
import { PatreonComponent } from './pages/patreon/patreon.component';

// Services
import { BlogCreationService } from './core/services/blog-creation/blog-creation.service';
import { ImageUploadService } from './core/services/image-upload/image-upload.service';
import { LoginService } from './core/services/login/login.service';
import { SubscriptionService } from './core/services/subscription/subscription.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'identification', component: IdentificationComponent },
  { path: 'spain', component: SpainComponent },
  { path: 'italy', component: ItalyComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'asia', component: AsiaComponent },
  { path: 'last-blogs', component: LastBlogsComponent },
  { path: 'patreon', component: PatreonComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-creation-admin', component: BlogCreationAdminComponent },
  { path: 'blogs/:title', component: BlogDetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ContactFormComponent,
    FooterComponent,
    HomeComponent,
    IdentificationComponent,
    SpainComponent,
    ItalyComponent,
    EuropeComponent,
    AsiaComponent,
    LastBlogsComponent,
    PatreonComponent,
    AboutUsComponent,
    SubscriptionComponent,
    BlogCreationAdminComponent,
    BlogCreationComponent,
    LoginComponent,
    ImageUploadComponent,
    BlogDetailComponent,
    BlogDetailDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    [FormsModule]
  ],
  providers: [
    SubscriptionService,
    LoginService,
    ImageUploadService,
    BlogCreationService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
