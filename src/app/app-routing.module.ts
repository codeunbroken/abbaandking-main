import { ContactComponent } from './page/contact/contact.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { OurProjectsComponent } from './page/our-projects/our-projects.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './page/terms-conditions/terms-conditions.component';
import { RefundPolicyComponent } from './page/refund-policy/refund-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
