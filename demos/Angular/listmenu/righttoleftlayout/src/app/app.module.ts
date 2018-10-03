import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxListMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistmenu';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';

@NgModule({
    declarations: [AppComponent, jqxListMenuComponent, jqxMenuComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        