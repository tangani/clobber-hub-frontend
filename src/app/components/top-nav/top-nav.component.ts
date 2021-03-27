import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {


  constructor( private changeDetectorRef: ChangeDetectorRef,
               private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('sidenav') sidenav: MatSidenav;

  isCollapsed = true;
  isShown =false;
  reason = ''

  // For smaller screen
  showFiller = false;
  @ViewChild('drawer') snav;
  mobileQuery: MediaQueryList;
  isExpanded = true;

  mode = new FormControl('over');

  toggleSearch = false;
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';

  private readonly _mobileQueryListener: () => void;
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  openSearch() {
    this.toggleSearch = true;
    // this.searchbar.nativeElement.focus();
  }

  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  openMyMenu() {
    this.trigger.toggleMenu();
  }
  closeMyMenu() {
    this.trigger.closeMenu();
    console.log('close')
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
