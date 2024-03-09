import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  sendEmail(){
    const mail = document.getElementById('emailBtn');
      window.location.href = 'mailto:rahimzio11@gmail.com';
    }
}
