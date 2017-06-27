import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridModule } from '../../modules/grid.module';
import { ButtonModule } from '../../modules/button.module';
import { MenuModule } from '../../modules/menu.module';
import { InputModule } from '../../modules/input.module';
import { NumberInputModule } from '../../modules/numberinput.module';
import { WindowModule } from '../../modules/window.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, GridModule, 
	  ButtonModule, MenuModule, InputModule, NumberInputModule, WindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }