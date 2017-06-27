import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { RibbonModule } from '../../modules/ribbon.module';
import { GridModule } from '../../modules/grid.module';
import { ButtonModule } from '../../modules/button.module';
import { TooltipModule } from '../../modules/tooltip.module';
import { DropDownButtonModule } from '../../modules/dropdownbutton.module';
import { ColorPickerModule } from '../../modules/colorpicker.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ToggleButtonModule } from '../../modules/togglebutton.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, RibbonModule, GridModule, ButtonModule, TooltipModule, DropDownButtonModule, ColorPickerModule, DropDownListModule, ToggleButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


