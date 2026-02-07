import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { PlatformModelService } from '../platform-model.service';
@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements AfterViewInit{

  @ViewChild('typedHeading') headingEl!: ElementRef<HTMLHeadingElement>;
  @ViewChild('typedText')   textEl!: ElementRef<HTMLHeadingElement>;

  showSecond = false;

  private headingText = 'Hey there,';
  private introText = `This is Shiva Krishna. I am a Full Stack Developer experienced in Angular, JavaScript, Python (FastAPI, Flask), PHP and databases like MongoDB and MySQL with a solid foundation in AWS for cloud-based solutions.`;

  constructor(private cdr: ChangeDetectorRef,public platformModelService:PlatformModelService) {}

  ngAfterViewInit() {
    const h1 = this.headingEl.nativeElement;
    this.typeText(h1, this.headingText, 60, () => {
      this.showSecond = true;          // make <h2> exist in the DOM
      this.cdr.detectChanges();        // ensure #typedText is available
      const h2 = this.textEl.nativeElement;
      this.typeText(h2, this.introText, 20);
    });
  }

  private typeText(el: HTMLElement, text: string, speed: number, onDone?: () => void) {
    el.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text.charAt(i++);
      if (i >= text.length) {
        clearInterval(timer);
        if (onDone) onDone();
      }
    }, speed);
  }

  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;
  formData:any = {name:'', email:'', message:''};
  isLoading:any = false;

downloadFile() {
    const link = document.createElement('a');
    link.href = '../assets/Shiva_Krishna_Feb_2026.pdf';
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
certifications = [
  {
    title: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    date: 'April 2025',
    logo: 'assets/aws.png',
    certificateUrl: 'https://www.credly.com/badges/b9255088-a1d4-4483-8c2b-bf6cdedc23ed/public_url'
  },
  {
    title: 'Python Programming Foundation',
    issuer: 'NXT WAVE',
    date: 'July 2022',
    logo: 'assets/python.png',
    certificateUrl: 'https://certificates.ccbp.in/intensive/programming-foundations?id=QDTRVCOGII'
  },
  {
    title: 'Javascript Essentials',
    issuer: 'NXT WAVE',
    date: 'July 2022',
    logo: 'assets/js.png',
    certificateUrl: 'https://certificates.ccbp.in/intensive/programming-foundations?id=QDTRVCOGII'
  }
];
}
