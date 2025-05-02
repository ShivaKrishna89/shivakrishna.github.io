import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { PlatformModelService } from '../platform-model.service';
@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  constructor(public platformModelService:PlatformModelService) {

  }
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;
  formData:any = {name:'', email:'', message:''};
  isLoading:any = false;

downloadFile() {
    const link = document.createElement('a');
    link.href = '../assets/resume_new.pdf';
    link.download = 'resume.pdf';
    link.click();
}


submitForm() {
  if (!this.contactForm) return;
  if(!this.formData.name || !this.formData.email || !this.formData.message){
    alert('Please fill all required fields.')
  } else{
  this.isLoading = true;
  emailjs.sendForm(
    'service_vipa36r', 
    'template_osrrjny', 
    this.contactForm.nativeElement,
    'i_iFK8A-4PFP4qEhk'  
  )
  .then(
    (response:any) => {
      this.isLoading = false;
      alert('Your message has been sent!');
      this.contactForm.nativeElement.reset(); 
    },
    (error:any) => {
      alert('Failed to send message. Please try again.');
    }
  );
}
}
}
