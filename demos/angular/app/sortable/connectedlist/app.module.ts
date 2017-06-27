import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SortableModule } from '../../modules/sortable.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, SortableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


