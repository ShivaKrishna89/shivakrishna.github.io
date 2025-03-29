import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;
  formData:any = {name:'', email:'', message:''};

downloadFile() {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
}


submitForm() {
  console.log(this.contactForm);
  
  if (!this.contactForm) return;

  emailjs.sendForm(
    'service_vipa36r', 
    'template_osrrjny', 
    this.contactForm.nativeElement,
    'i_iFK8A-4PFP4qEhk'  
  )
  .then(
    (response:any) => {
      alert('Your message has been sent!');
      this.contactForm.nativeElement.reset(); 
    },
    (error:any) => {
      alert('Failed to send message. Please try again.');
    }
  );
}
}
