import { Component, OnInit, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  @ViewChild('joins') joins: MatSidenav;
  @ViewChild('singIn') singIn: MatSidenav;

  title = 'Clobber Hub';
  mobileQuery: MediaQueryList;

  mode = new FormControl('over');
  shouldRun = true;

  reason = '';
  joinUsReason = '';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private readonly _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  get getIfMobile() {
    return window.innerWidth < 720;
  }
  close(reason: string) {
    this.reason = reason;
    this.singIn.close();
  }
  closeJoinUs(reason: string){
    this.joinUsReason = reason;
    this.joins.close();
  }
}
