 
import { Component } from '@angular/core';

import { jqxListBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxlistbox';

@Component({
    selector: 'my-app',
    template: 
        `<jqxListBox
            [width]='200' [height]='250' [selectedIndex]='3' [source]='source'>
        </jqxListBox>`
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
