import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { TrackerComponent } from './tracker/tracker.component';
import { SystemComponent } from './system/system.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouteguardService } from './routeguard.service'




const routes: Routes = [
{ path: '', redirectTo: 'Home', pathMatch: 'full' },
{ path: 'Home', component: HeaderComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'Intro', component: IntroComponent},
{ path: 'Services', component: ServicesComponent },
{ path: 'Tracker', component: TrackerComponent, canActivate: [RouteguardService]},
{ path: 'Projects', component: ProjectsComponent},
{ path: 'About', component: AboutComponent},
{ path: 'Contact', component: ContactComponent},
{ path: 'System', component: SystemComponent},
{ path: 'Team', component: TeamComponent},
{ path: 'Testimonials', component: TestimonialsComponent},
{ path: '404', component: NotfoundComponent },
{ path: '**', redirectTo: '/404' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
