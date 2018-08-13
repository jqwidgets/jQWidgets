import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { HeroesComponent } from './heroes.component'
import { ListBoxModule } from '../../modules/listbox.module';

@NgModule({
    declarations: [
        AppComponent, HeroesComponent
    ],
    imports: [
        BrowserModule, CommonModule, ListBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
