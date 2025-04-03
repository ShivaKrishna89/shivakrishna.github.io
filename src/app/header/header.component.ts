import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { PlatformModelService } from '../platform-model.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgbPopoverModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
    constructor(public platformModelService:PlatformModelService) {
  
    }
}
