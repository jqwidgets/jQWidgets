import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GridModule } from '../../modules/grid.module';
import { DragDropModule } from '../../modules/dragdrop.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, GridModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }