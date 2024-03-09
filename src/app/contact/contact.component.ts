import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactformComponent } from '../contactform/contactform.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,ContactformComponent,FormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  nameFail: boolean | undefined= false;
  nameRight: boolean | undefined;
  emailFail: boolean | undefined = false;
  emailRight: boolean | undefined;
  messageCurrentInputLength: any;
  messageFail: boolean | undefined;
  messageRight: boolean | undefined;

  nameCurrentInputLength: number = 0;
  emailCurrentInputLength: number = 0;
  allRequiements:boolean = false;
  sendBnt:boolean = false;
  sendBntWrong:boolean = false;
  sendBntRight:boolean = false;
  clicked:boolean = false;
  pleaseAccept:boolean = false;
  
  ContactData = {
    name: "",
    email:"",
    message: ""
  };

  http = inject(HttpClient);
  
  messageValue(event: any): void{
    this.messageCurrentInputLength = event.target.value.length;
    const fieldIdDiv = document.getElementById('messageFieldDiv');
    const fieldId = document.getElementById('messageField');
   
      if(this.messageCurrentInputLength < 5){
        this.messageLenghtoverFive()
      }
      if(this.messageCurrentInputLength > 5){
        this.messageLenghtunderFive();
  }

  this.CheckSendMessage();
}

      messageLenghtoverFive(){
        const fieldIdDiv = document.getElementById('messageFieldDiv');
        const fieldId = document.getElementById('messageField');

        fieldId?.classList.remove('true');
        fieldId?.classList.add('false');
        fieldIdDiv?.classList.remove('contact-form-div');
        fieldIdDiv?.classList.add('contact-form-div-fail');
        this.messageFail = true;
        this.messageRight = false;
    }

    messageLenghtunderFive(){
      const fieldIdDiv = document.getElementById('messageFieldDiv');
      const fieldId = document.getElementById('messageField');

        fieldId?.classList.remove('false');
        fieldId?.classList.add('true');
        fieldIdDiv?.classList.remove('contact-form-div-fail');
        fieldIdDiv?.classList.add('contact-form-div');
        this.messageFail = false;
        this.messageRight = true;
    }

  nameFieldValue(event: any): void {
  this.nameCurrentInputLength = event.target.value.length;
  const fieldIdDiv = document.getElementById('nameFieldDiv');
  const fieldId = document.getElementById('nameField');
 
    if(this.nameCurrentInputLength <= 3){
      this.nameLengthUnderThree()
    }
    if(this.nameCurrentInputLength >= 3){
      this.nameLengthOverThree()
    }
    
    this.CheckSendMessage();
  }

  nameLengthUnderThree(){
    const fieldIdDiv = document.getElementById('nameFieldDiv');
    const fieldId = document.getElementById('nameField');
     fieldId?.classList.remove('true');
      fieldId?.classList.add('false');
      fieldIdDiv?.classList.remove('contact-form-div');
      fieldIdDiv?.classList.add('contact-form-div-fail');
      this.nameFail = true;
      this.nameRight = false;
  }
  
  nameLengthOverThree(){
    const fieldIdDiv = document.getElementById('nameFieldDiv');
    const fieldId = document.getElementById('nameField');

      fieldId?.classList.remove('false');
      fieldId?.classList.add('true');
      fieldIdDiv?.classList.remove('contact-form-div-fail');
      fieldIdDiv?.classList.add('contact-form-div');
      this.nameFail = false;
      this.nameRight = true;
  }
  
  emailFieldValue(event: any): void{
  this.emailCurrentInputLength = event.target.value.length;
  const fieldIdDiv = document.getElementById('emailFieldDiv');
  const fieldId = document.getElementById('emailField');

  const emailInput = document.getElementById('emailField') as HTMLInputElement | null;
  const cleanInput = emailInput?.value.trim() || '';

  this.ValidateEmail(cleanInput);

  if(this.allRequiements == false){
      this.AllEmailRequiementTrue(); 
      }
    if(this.allRequiements == true){
      this.AllEmailRequiementFalse(); 
  }
}

  AllEmailRequiementTrue(){
    const fieldIdDiv = document.getElementById('emailFieldDiv');
    const fieldId = document.getElementById('emailField');

    fieldId?.classList.remove('true');
    fieldId?.classList.add('false');
    fieldIdDiv?.classList.remove('contact-form-div');
    fieldIdDiv?.classList.add('contact-form-div-fail');
    this.emailFail = true;
  }

  AllEmailRequiementFalse(){
    const fieldIdDiv = document.getElementById('emailFieldDiv');
    const fieldId = document.getElementById('emailField');

    fieldId?.classList.remove('false');
    fieldId?.classList.add('true');
    fieldIdDiv?.classList.remove('contact-form-div-fail');
    fieldIdDiv?.classList.add('contact-form-div');
    this.emailFail = false;
  }

ValidateEmail(input: string) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    this.allRequiements = true;
    this.emailRight = true;
    this.CheckSendMessage();
    
  } else {
    this.allRequiements = false;
  }
}

CheckSendMessage(){
  if(this.messageRight && this.nameRight && this.allRequiements){
    this.sendBnt = true;
  }else{
    this.sendBnt = false;
  }
}

checkBox(){
  if(this.clicked){
    this.clicked = false;
    const messageBnt = document.getElementById('sendMessage');
    messageBnt?.classList.remove('checked');

  }else{
    this.clicked = true;
    const messageBnt = document.getElementById('sendMessage');
    messageBnt?.classList.add('checked');
  }
}

clearDiv(){
 this.ContactData.name = "";
 this.ContactData.email = "";
 this.ContactData.message = "";
}

SendMessage(){
  this.onSubmit(this.ContactData)
  this.clearDiv()
  const messageBnt = document.getElementById('sendMessage');
  if(this.clicked == false){
    this.pleaseAccept = true;
  }else{
    this.pleaseAccept = false;
  }
 
  }

  mailTest = true;

  post = {
   endPoint: 'https://rahimzio.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm:any) {
      this.http.post(this.post.endPoint, this.post.body(this.ContactData))
        .subscribe({
          next: (response) => {
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
  }

}
