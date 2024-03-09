import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { IAmComponent } from '../i-am/i-am.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-full-page',
  standalone: true,
  imports: [AboutMeComponent,IAmComponent,MySkillsComponent,PortfolioComponent,ContactComponent],
  templateUrl: './full-page.component.html',
  styleUrl: './full-page.component.scss'
})
export class FullPageComponent {

}
