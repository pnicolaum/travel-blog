import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Components
import { BlogCreationComponent } from './core/components/blog-creation/blog-creation.component';
import { BlogDeleteComponent } from './core/components/blog-delete/blog-delete.component';
import { BlogDetailDisplayComponent } from './core/components/blog-detail-display/blog-detail-display.component';
import { BlogUpdateComponent } from './core/components/blog-update/blog-update.component';
import { ContactFormComponent } from './core/components/contact-form/contact-form.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ImageUploadComponent } from './core/components/image-upload/image-upload.component';
import { LastBlogsComponent } from './core/components/last-blogs/last-blogs.component';
import { LoginComponent } from './core/components/login/login.component';
import { SectionCreationComponent } from './core/components/section-creation/section-creation.component';
import { SectionDeleteComponent } from './core/components/section-delete/section-delete.component';
import { SectionUpdateComponent } from './core/components/section-update/section-update.component';
import { SubscriptionComponent } from './core/components/subscription/subscription.component';

// Pages
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PatreonComponent } from './pages/patreon/patreon.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { UnsubscriptionComponent } from './pages/unsubscription/unsubscription.component';

// Services
import { AuthService } from './core/services/auth/auth.service';
import { BlogResolver } from './core/services/blog-resolver/blog-resolver.service';
import { BlogService } from './core/services/blog/blog.service';
import { ImageUploadService } from './core/services/image-upload/image-upload.service';
import { LoginService } from './core/services/login/login.service';
import { NodemailerService } from './core/services/nodemailer/nodemailer.service';
import { SectionService } from './core/services/section/section.service';
import { SubscriptionService } from './core/services/subscription/subscription.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'identification', component: IdentificationComponent },
  { path: 'patreon', component: PatreonComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-admin', component: BlogAdminComponent },
  { path: 'blogs', component: BlogDetailComponent },
  { path: 'unsubscription', component: UnsubscriptionComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'politica-cookies', component: PoliticaCookiesComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  {
    path: 'blogs/:keyword',
    component: BlogDetailDisplayComponent,
    resolve: {
      blog: BlogResolver,
    }
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    // components
    AppComponent,
    BlogCreationComponent,
    BlogDeleteComponent,
    BlogDetailDisplayComponent,
    BlogUpdateComponent,
    ContactFormComponent,
    FooterComponent,
    HeaderComponent,
    ImageUploadComponent,
    LastBlogsComponent,
    LoginComponent,
    SectionCreationComponent,
    SectionDeleteComponent,
    SectionUpdateComponent,
    SubscriptionComponent,

    // pages
    AboutUsComponent,
    AvisoLegalComponent,
    BlogAdminComponent,
    BlogDetailComponent,
    HomeComponent,
    IdentificationComponent,
    NotFoundComponent,
    PatreonComponent,
    PoliticaCookiesComponent,
    PoliticaPrivacidadComponent,
    UnsubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule, // entre corchetes

  ],
  providers: [
    AuthService,
    BlogService,
    BlogResolver,
    NodemailerService,
    ImageUploadService,
    LoginService,
    SectionService,
    SubscriptionService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
