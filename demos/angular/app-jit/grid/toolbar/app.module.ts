import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridModule } from '../../modules/grid.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { InputModule } from '../../modules/input.module';
import { WindowModule } from '../../modules/window.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, GridModule, ButtonModule, DropDownListModule, InputModule, WindowModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }