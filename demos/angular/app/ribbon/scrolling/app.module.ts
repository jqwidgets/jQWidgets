import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { RibbonModule } from '../../modules/ribbon.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, RibbonModule, RadioButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


