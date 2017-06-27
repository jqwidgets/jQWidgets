import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DragDropModule } from '../../modules/dragdrop.module';
import { GridModule } from '../../modules/grid.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DragDropModule, GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }