import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './section/side-bar/side-bar.component';
import { HeaderComponent } from './section/header/header.component';
import { HeroComponent } from './section/hero/hero.component';
import { AboutComponent } from './section/about/about.component';
import { WhatWeDoComponent } from './section/what-we-do/what-we-do.component';
import { OurToolsComponent } from './section/our-tools/our-tools.component';
import { TestimonialComponent } from './section/testimonial/testimonial.component';
import { ClientsComponent } from './section/clients/clients.component';
import { FooterComponent } from './section/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { OurProjectsComponent } from './page/our-projects/our-projects.component';
import { ContactComponent } from './page/contact/contact.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {CarouselModule} from 'primeng/carousel';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './page/terms-conditions/terms-conditions.component';
import { RefundPolicyComponent } from './page/refund-policy/refund-policy.component';
import { TogetherSectionComponent } from './section/together-section/together-section.component';
import { SoftwareExpertiseComponent } from './section/software-expertise/software-expertise.component';
import { BuildSoftwareComponent } from './section/build-software/build-software.component';
import { ExploreServicesComponent } from './section/explore-services/explore-services.component';
import { FeaturedProductsComponent } from './section/featured-products/featured-products.component';
import { BeOfHelpComponent } from './section/be-of-help/be-of-help.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    WhatWeDoComponent,
    OurToolsComponent,
    TestimonialComponent,
    ClientsComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurProjectsComponent,
    ContactComponent,
    SplashscreenComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    RefundPolicyComponent,
    TogetherSectionComponent,
    SoftwareExpertiseComponent,
    BuildSoftwareComponent,
    ExploreServicesComponent,
    FeaturedProductsComponent,
    BeOfHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    CarouselModule,
    BrowserAnimationsModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
