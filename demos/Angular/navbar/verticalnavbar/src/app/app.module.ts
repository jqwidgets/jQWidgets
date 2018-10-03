import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxNavBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnavbar';

@NgModule({
    declarations: [AppComponent, jqxNavBarComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        