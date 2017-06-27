import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SplitterModule } from '../../modules/splitter.module';
import { ButtonModule } from '../../modules/button.module';
import { GridModule } from '../../modules/grid.module';
import { InputModule } from '../../modules/input.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, 
		SplitterModule, ButtonModule, GridModule, InputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


