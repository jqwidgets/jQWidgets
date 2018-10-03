import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';
import { jqxResponsivePanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxresponsivepanel';

@NgModule({
    declarations: [AppComponent, jqxPanelComponent, jqxResponsivePanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        