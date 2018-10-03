import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxEditorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxeditor';

@NgModule({
    declarations: [AppComponent, jqxEditorComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        