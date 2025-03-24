import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
downloadFile() {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
}
}
