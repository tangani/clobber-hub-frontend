import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  @ViewChild('stickyNavigator') navigatorElement: ElementRef;

  sticky = false;
  navigatorPosition: any;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(){
    this.navigatorPosition = this.navigatorElement.nativeElement.offsetTop
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.navigatorPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
