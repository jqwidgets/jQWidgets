import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTimePickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtimepicker';

@NgModule({
    declarations: [AppComponent, jqxTimePickerComponent ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        