import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDropDownButtonComponent } from 'components/angular_jqxdropdownbutton';
import { jqxScrollViewComponent }     from 'components/angular_jqxscrollview';
import { jqxColorPickerComponent }    from 'components/angular_jqxcolorpicker';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDropDownButtonComponent, jqxScrollViewComponent, jqxColorPickerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

