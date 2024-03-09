import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  previousBnt:any;
  bntId:any;
  menuopen = false;
  openmenu(){
    let navBar = document.getElementById('nav-bar');
    if(!this.menuopen){
      navBar?.classList.remove('close-menu');
      navBar?.classList.add('open-menu');
      
      this.menuopen = true;
    }else{
      navBar?.classList.add('close-menu');
      navBar?.classList.remove('open-menu');
      
      this.menuopen = false;
    }
  }
  
  changeColor(id:string){
    this.bntId = document.getElementById(id);
    this.bntId.classList.add('add-color');
    if(this.previousBnt){
      this.previousBnt.classList.remove('add-color');
    }
    this.previousBnt = this.bntId;
    this.bntId = '';
  }

  mobileNavBar(id:string){
    this.changeColor(id);
    this.openmenu();
  }
}
