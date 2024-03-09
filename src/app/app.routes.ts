import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FullPageComponent } from './full-page/full-page.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    {path:"",component:FullPageComponent},
    {path:"impressum", component:ImpressumComponent}
];
