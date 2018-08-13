import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { ProgressBarModule } from '../../modules/progressbar.module';
import { ButtonModule } from '../../modules/button.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { InputModule } from '../../modules/input.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, FormsModule, ProgressBarModule, ButtonModule, CheckBoxModule, InputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


