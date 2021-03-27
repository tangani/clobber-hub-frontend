import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent, TestingComponent, MenComponent, WomenComponent, KidsComponent,
  FeaturedComponent, SaleComponent, NewReleasesComponent
} from './components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'new-releases', component: NewReleasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
