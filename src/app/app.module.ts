import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSection1Component } from './home-section-1/home-section-1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSection1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
