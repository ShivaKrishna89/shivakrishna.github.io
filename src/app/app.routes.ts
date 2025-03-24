import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'contactMe',component:ContactMeComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
