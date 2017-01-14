import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxRibbonComponent }         from '../../../../../jqwidgets-ts/angular_jqxribbon';
import { jqxButtonComponent }         from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxTooltipComponent }        from '../../../../../jqwidgets-ts/angular_jqxtooltip';
import { jqxDropDownButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxColorPickerComponent }    from '../../../../../jqwidgets-ts/angular_jqxcolorpicker';
import { jqxDropDownListComponent }   from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';
import { jqxGridComponent }           from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxToggleButtonComponent }   from '../../../../../jqwidgets-ts/angular_jqxtogglebutton';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxRibbonComponent, jqxButtonComponent, jqxTooltipComponent, jqxDropDownButtonComponent, jqxColorPickerComponent, jqxDropDownListComponent, jqxGridComponent, jqxToggleButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

