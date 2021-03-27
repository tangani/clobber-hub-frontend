import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { ICategory } from '../../data/models/imodels';
import { Category } from '../../data/models/models';
import { CATEGORY_DATA } from '../../data/common/categoryData';
import { Product } from '../../data/common/classes';
import { DRESSES } from '../../data/common/products';
import { CarouselWheelService } from '../../data/service/carousel-wheel.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  @ViewChild('stickyNavigator') navigatorElement: ElementRef;

  sticky = false;
  navigatorPosition: any;

  displayedColumns: string[] = [ 'name'];
  dataSource = CATEGORY_DATA;

  start = 0;
  first = 0;
  second = 1;
  third = 2;
  firstDress = 0;
  secondDress = 1;
  thirdDress = 2;

  dresses: Product[] = DRESSES;

  constructor(
    private carousel: CarouselWheelService ) { }

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

  previous (first, second, third, tag: string) {
    if (tag === 'Shoes'){
      [this.firstDress, this.secondDress, this.thirdDress] =  this.carousel.previousImage(this.dataSource.length, first, second, third);
    } else if (tag === 'Dresses') {
      [this.first, this.second, this.third] =  this.carousel.previousImage(this.dataSource.length, first, second, third);
    }
  }
  nextImage (first, second, third, tag: string) {
    if (tag === 'Shoes'){
      [this.firstDress, this.secondDress, this.thirdDress] =  this.carousel.nextImage(this.dataSource.length, first, second, third);
    } else if (tag === 'Dresses') {
      [this.first, this.second, this.third] =  this.carousel.nextImage(this.dataSource.length, first, second, third);
    }
  }

}
