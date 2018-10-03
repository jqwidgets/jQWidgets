import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderModule } from './header/header.module';
import { NavBarModule } from './navbar/navbar.module';
import { HomeModule }   from './home/home.module';
import { ChartLeftModule }  from './chart-left/chart-left.module';
import { ChartRightModule } from './chart-right/chart-right.module';
import { ChartMiniModule } from './chart-mini/chart-mini.module';
import { BulletChartsModule } from './bulletcharts/bulletcharts.module';
import { GridModule } from './grid/grid.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, HeaderModule, NavBarModule, HomeModule, ChartLeftModule, ChartRightModule, ChartMiniModule, BulletChartsModule, GridModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
