import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTimePickerModule } from 'jqwidgets-ng/jqxtimepicker';

@NgModule({
    declarations: [AppComponent ],
    imports: [BrowserModule, FormsModule, jqxTimePickerModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        