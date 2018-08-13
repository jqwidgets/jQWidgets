import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SchedulerModule } from '../../modules/scheduler.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, SchedulerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


