import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {SampleList} from './app/sample-list/sample-list';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {AwardList} from './app/award-list/award-list';
import {HomePage} from './app/home-page/home-page';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: HomePage},
  { path: 'samples', component: SampleList},
  {path: 'awards', component: AwardList},
  {path: '**', component: PageNotFound}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
