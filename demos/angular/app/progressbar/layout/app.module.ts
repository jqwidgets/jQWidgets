import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { ProgressBarModule } from '../../modules/progressbar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, ProgressBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


