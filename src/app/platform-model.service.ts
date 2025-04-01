import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformModelService {
  _isMobile:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _isMobilePortrait:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _isMobileLandscape:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  all:any = window.innerWidth;
  device:any = {orientation: window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait",
    width:window.innerWidth};
  constructor() { }
}
