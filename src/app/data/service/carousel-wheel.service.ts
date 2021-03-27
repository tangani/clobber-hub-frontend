import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselWheelService {

  constructor() { }

  nextImage(imagesLength: number, firstImage: number, secondImage: number, thirdImage?: number, fourthImage?: number) {
    if (firstImage === imagesLength - 1) {
      firstImage = 0;
    } else {
      console.log(firstImage);
      firstImage += 1;
      console.log(firstImage)
    }
    if (secondImage === imagesLength - 1) {
      secondImage = 0;
    } else {
      secondImage += 1
    }
    if (thirdImage === imagesLength - 1 ) {
      thirdImage = 0;
    } else {
      thirdImage += 1;
    }
    if (fourthImage === imagesLength - 1) {
      fourthImage = 0;
    } else {
      fourthImage += 1;
    }
    // console.log([imagesLength, firstImage, secondImage, thirdImage, fourthImage])
    return [firstImage, secondImage, thirdImage, fourthImage];
  }

  previousImage(imagesLength: number, firstImage: number, secondImage: number, thirdImage?: number, fourthImage?: number) {
    if (firstImage === 0) {
      firstImage = imagesLength - 1;
    } else  {
      firstImage -= 1;
    }
    if (secondImage === 0) {
      secondImage = imagesLength - 1;
    } else {
      secondImage -= 1;
    }
    if (thirdImage === 0) {
      thirdImage = imagesLength - 1;
    } else {
      thirdImage -= 1;
    }
    if (fourthImage === 0) {
      fourthImage = imagesLength - 1;
    } else {
      fourthImage -= 1;
    }
    return [firstImage, secondImage, thirdImage, fourthImage];
  }
}
