 
import { Component } from '@angular/core';

import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'my-app',
    template: `<jqxDropDownList
                   [width]='200' [height]='25' [source]='source' [selectedIndex]='1'>
               </jqxDropDownList>`
}) 

export class AppComponent 
{ 
    source: string[] =
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
}
