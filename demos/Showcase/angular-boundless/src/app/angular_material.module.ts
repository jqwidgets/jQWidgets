import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';

@NgModule({
    exports:
    [
        BrowserAnimationsModule, MatIconModule, MatMenuModule, MatButtonModule, MatSlideToggleModule
    ]
})

export class AngularMaterialModule { }
