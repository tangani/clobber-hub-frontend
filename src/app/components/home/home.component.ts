import { Component, OnInit  } from '@angular/core';
import { Product, TopImage } from '../../data/common/classes';
import { DRESSES } from '../../data/common/products';
import { CarouselWheelService } from '../../data/service/carousel-wheel.service';
import { TOPIMAGES } from '../../data/common/topImages';
import { BESTSELLERS } from '../../data/common/bestSellers';
import { Arrivals } from '../../data/common/arrivals';
import { SPECIALS } from '../../data/common/specials';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isActive = false;

  // This is for the current static carousel
  topSellersOne = 0;
  topSellersTwo = 1;
  topSellersThree = 2;

  // This is for the changeable carousel
  topSectionOne = 0;
  topSectionTwo = 1;
  topSectionThree = 2

  dresses: Product[] = DRESSES;
  topImages: TopImage[] = TOPIMAGES;
  dataSource: Product[] = BESTSELLERS;

  sectionOne = 'Best-Sellers';
  sectionTwo = 'New-Arrivals';
  sectionThree = 'Specials';

  first = true;
  second = false;
  third = false;

  constructor(
    private carousel: CarouselWheelService
  ) { }

  ngOnInit() { }

  previousImage (first, second, third, tag: string) {
    if (tag === 'choice-carousel') {
      // tslint:disable-next-line:max-line-length
      [this.topSectionOne, this.topSectionTwo, this.topSectionThree ] = this.carousel.previousImage(this.dataSource.length, first, second, third);
    }
    if (tag === 'categories') {
      [this.topSellersOne, this.topSellersTwo, this.topSellersThree ] = this.carousel.previousImage(DRESSES.length, first, second, third);
    }
  }

  nextImage (first, second, third, tag: string) {
    if (tag === 'choice-carousel') {
      // tslint:disable-next-line:max-line-length
      [this.topSectionOne, this.topSectionTwo, this.topSectionThree ] = this.carousel.nextImage(this.dataSource.length, first, second, third);
    } else if (tag === 'categories') {
      [this.topSellersOne, this.topSellersTwo, this.topSellersThree ] = this.carousel.nextImage(DRESSES.length, first, second, third);
    }
  }

  swapText(selected) {
    if (selected === 'sectionOne') {
      this.dataSource = BESTSELLERS;
      this.first = true;
      this.second = false;
      this.third = false;
    } else if (selected === 'sectionTwo') {
      this.dataSource = Arrivals;
      this.first = false;
      this.second = true;
      this.third = false;
    } else if (selected === 'sectionThree') {
      this.dataSource = SPECIALS;
      this.first = false;
      this.second = false;
      this.third = true;
    }
  }

}
