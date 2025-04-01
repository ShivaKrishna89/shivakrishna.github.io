import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PlatformModelService } from './platform-model.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{
  title = 'portofolio';
  isMobile:Boolean = false;
  isMobilePortrait:Boolean = false;
  isMobileLandscape:Boolean = false;
  constructor(private platformModelService:PlatformModelService,private router:Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/']);
    this.platformModelService._isMobile.next(window.innerWidth < 1280);
    this.isMobile = window.innerWidth < 1280;
    this.platformModelService._isMobilePortrait.next(window.innerWidth <= 450);
    this.isMobilePortrait = window.innerWidth <= 450;
    this.platformModelService._isMobileLandscape.next(window.innerWidth > 450 && window.innerWidth < 1280);
    this.isMobileLandscape = window.innerWidth > 450 && window.innerWidth < 1280
  }

  doOnResize(){
    if(this.isMobile != window.innerWidth < 1280){
      this.isMobile = window.innerWidth < 1280;
      this.platformModelService._isMobile.next(window.innerWidth < 1280);
    }
    if(this.isMobilePortrait != window.innerWidth <= 450){
      this.isMobilePortrait = window.innerWidth <= 450;
      this.platformModelService._isMobilePortrait.next(window.innerWidth <= 450);
    }
    if(this.isMobileLandscape != (window.innerWidth > 450 && window.innerWidth < 1280)){
      this.isMobileLandscape = window.innerWidth > 450 && window.innerWidth < 1280
      this.platformModelService._isMobileLandscape.next(window.innerWidth > 450 && window.innerWidth < 1280);
    }
    this.platformModelService.device.width = window.innerWidth;
    this.platformModelService.device.orientation = window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait";
  }
  
}
