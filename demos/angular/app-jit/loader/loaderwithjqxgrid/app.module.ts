import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { LoaderModule } from '../../modules/loader.module';
import { GridModule } from '../../modules/grid.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, LoaderModule, GridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
