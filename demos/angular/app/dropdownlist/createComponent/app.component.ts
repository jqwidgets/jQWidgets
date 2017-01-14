/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" /> 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'my-app',
    template: `<jqxDropDownList #dropDownListReference [auto-create]='false'></jqxDropDownList>`
}) 

export class AppComponent implements AfterViewInit  
{ 
    @ViewChild('dropDownListReference') myDropDownList: jqxDropDownListComponent;

    ngAfterViewInit(): void
    {
        this.myDropDownList.createComponent(this.settings);
    }   

    source: Array<String> =
    [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Café Bombón",
        "Café au lait",
        "Caffé Corretto",
        "Café Crema",
        "Caffé Latte",
        "Caffé macchiato",
        "Café mélange",
        "Coffee milk",
        "Cafe mocha",
        "Cappuccino",
        "Carajillo",
        "Cortado",
        "Cuban espresso",
        "Espresso",
        "Eiskaffee",
        "The Flat White",
        "Frappuccino",
        "Galao",
        "Greek frappé coffee",
        "Iced Coffee﻿",
        "Indian filter coffee",
        "Instant coffee",
        "Irish coffee",
        "Liqueur coffee"
    ];  

    settings: jqwidgets.DropDownListOptions =
    {
        source: this.source, selectedIndex: 1, width: '200', height: '25'
    }
}
