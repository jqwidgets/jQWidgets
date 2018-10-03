import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTooltipComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtooltip';

@NgModule({
    declarations: [AppComponent, jqxTooltipComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        