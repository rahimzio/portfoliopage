import { Component } from '@angular/core';

@Component({
  selector: 'app-i-am',
  standalone: true,
  imports: [],
  templateUrl: './i-am.component.html',
  styleUrl: './i-am.component.scss'
})
export class IAmComponent {
  sendEmail(){
  const mail = document.getElementById('emailBtn');
    window.location.href = 'mailto:rahimzio11@gmail.com';
  }
}
