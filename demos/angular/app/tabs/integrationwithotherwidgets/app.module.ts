import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TabsModule } from '../../modules/tabs.module';
import { GridModule } from '../../modules/grid.module';
import { ChartModule } from '../../modules/chart.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TabsModule, GridModule, ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


