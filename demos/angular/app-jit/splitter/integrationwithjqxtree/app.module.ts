import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SplitterModule } from '../../modules/splitter.module';
import { TreeModule } from '../../modules/tree.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, SplitterModule, TreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


