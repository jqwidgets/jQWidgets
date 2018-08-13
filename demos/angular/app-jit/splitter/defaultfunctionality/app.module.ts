import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SplitterModule } from '../../modules/splitter.module';
import { ExpanderModule } from '../../modules/expander.module';
import { TreeModule } from '../../modules/tree.module';
import { PanelModule } from '../../modules/panel.module';
import { ListBoxModule } from '../../modules/listbox.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpModule, SplitterModule, ExpanderModule, TreeModule, PanelModule, ListBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


