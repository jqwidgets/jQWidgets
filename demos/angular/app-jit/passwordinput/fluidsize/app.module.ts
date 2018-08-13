import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { PasswordInputModule } from '../../modules/passwordinput.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, PasswordInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
