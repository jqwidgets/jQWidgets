import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxListBoxComponent } from '../../../jqwidgets-ts/angular_jqxlistbox';
import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxListBox') myListBox: jqxListBoxComponent;
    @ViewChild('Events') myPanel: jqxPanelComponent;

    source: string[] = [
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

    select(event: any): void {
        let item = this.myListBox.getItem(event.args.index);
        if (item != null) {
            this.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
        }
    }

    unselect(event: any): void {
        let item = this.myListBox.getItem(event.args.index);
        if (item != null) {
            this.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
        }
    }
}