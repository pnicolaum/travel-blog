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
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { PatreonComponent } from './pages/patreon/patreon.component';

// Services
import { BlogCreationService } from './core/services/blog-creation/blog-creation.service';
// import { BlogResolver } from './core/services/blog-resolver/blog-resolver.service';
import { BlogUpdateComponent } from './core/components/blog-update/blog-update.component';
import { SectionCreationComponent } from './core/components/section-creation/section-creation.component';
import { ImageUploadService } from './core/services/image-upload/image-upload.service';
import { LoginService } from './core/services/login/login.service';
import { SectionCreationService } from './core/services/section-creation/section-creation.service';
import { SubscriptionService } from './core/services/subscription/subscription.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'identification', component: IdentificationComponent },
  { path: 'patreon', component: PatreonComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-admin', component: BlogAdminComponent },
  { path: 'blogs', component: BlogDetailComponent },
  {
    path: 'blogs/:keyword',
    component: BlogDetailDisplayComponent,
    // resolve: {
    //   blog: BlogResolver,
    // }
  },
]

@NgModule({
  declarations: [
    // components
    AppComponent,
    BlogCreationComponent,
    BlogDetailDisplayComponent,
    BlogUpdateComponent,
    ContactFormComponent,
    FooterComponent,
    HeaderComponent,
    ImageUploadComponent,
    LoginComponent,
    SectionCreationComponent,
    SliderComponent,
    SubscriptionComponent,

    // pages
    AboutUsComponent,
    BlogAdminComponent,
    BlogDetailComponent,
    HomeComponent,
    IdentificationComponent,
    PatreonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    [FormsModule]
  ],
  providers: [
    BlogCreationService,
    // BlogResolver,
    ImageUploadService,
    LoginService,
    SectionCreationService,
    SubscriptionService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
