import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClickOutsideModule} from 'ng-click-outside';


import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    SignInComponent,
    HomePageComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule, ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
