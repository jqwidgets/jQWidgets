import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { NotificationModule } from '../../modules/notification.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, NotificationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
