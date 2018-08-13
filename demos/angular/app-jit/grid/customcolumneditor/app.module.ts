import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GridModule } from '../../modules/grid.module';
import { SliderModule } from '../../modules/slider.module';
import { InputModule } from '../../modules/input.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, GridModule, SliderModule, InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }