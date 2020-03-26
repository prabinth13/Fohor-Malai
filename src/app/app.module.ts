import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { SystemComponent } from './system/system.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ConfigService } from './config.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ServicesComponent,
    SystemComponent,
    TestimonialsComponent,
    ProjectsComponent,
    TeamComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    TrackerComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),

  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
