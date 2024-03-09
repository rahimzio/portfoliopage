import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  sendEmail(){
    const mail = document.getElementById('emailBtn');
      window.location.href = 'mailto:rahimzio11@gmail.com';
    }
}
