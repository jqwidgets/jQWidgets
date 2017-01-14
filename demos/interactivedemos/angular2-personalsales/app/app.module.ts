import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }      from './app.component';
import { GridComponent }     from './innerComponents/gridComponent/grid.component';
import { ChartComponent }    from './innerComponents/chartComponent/chart.component';
import { ComboBoxComponent } from './innerComponents/comboBoxComponent/comboBox.component';
import { DropDownComponent } from './innerComponents/dropDownComponent/dropDown.component';

import { jqxGridComponent }         from 'components/angular_jqxgrid';
import { jqxChartComponent }        from 'components/angular_jqxchart';
import { jqxComboBoxComponent }     from 'components/angular_jqxcombobox';
import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist';


@NgModule({
    imports: [BrowserModule],
    declarations:
    [
        AppComponent, GridComponent, ChartComponent, ComboBoxComponent, DropDownComponent,
        jqxGridComponent, jqxChartComponent, jqxComboBoxComponent, jqxDropDownListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

