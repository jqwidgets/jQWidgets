import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { jqxSplitterComponent } from '../../../../../jqwidgets-ts/angular_jqxsplitter';
import { jqxExpanderComponent } from '../../../../../jqwidgets-ts/angular_jqxexpander';
import { jqxTreeComponent }     from '../../../../../jqwidgets-ts/angular_jqxtree';
import { jqxPanelComponent }    from '../../../../../jqwidgets-ts/angular_jqxpanel';
import { jqxListBoxComponent }  from '../../../../../jqwidgets-ts/angular_jqxlistbox';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, jqxSplitterComponent, jqxExpanderComponent, jqxTreeComponent, jqxPanelComponent, jqxListBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

