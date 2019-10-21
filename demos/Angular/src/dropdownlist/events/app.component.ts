import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    ngAfterViewInit(): void {
        this.myPanel.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    source: string[] = [
        'Affogato',
        'Americano',
        'Bicerin',
        'Breve',
        'Café Bombón',
        'Café au lait',
        'Caffé Corretto',
        'Café Crema',
        'Caffé Latte',
        'Caffé macchiato',
        'Café mélange',
        'Coffee milk',
        'Cafe mocha',
        'Cappuccino',
        'Carajillo',
        'Cortado',
        'Cuban espresso',
        'Espresso',
        'Eiskaffee',
        'The Flat White',
        'Frappuccino',
        'Galao',
        'Greek frappé coffee',
        'Iced Coffee﻿',
        'Indian filter coffee',
        'Instant coffee',
        'Irish coffee',
        'Liqueur coffee'
    ];
    
    listOnSelect(event: any): void {
        let args = event.args;
        let item = this.myDropDownList.getItem(args.index);
        if (item != null) {
            this.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
        }
    };

    listOnUnselect(event: any): void {
        let args = event.args;
        let item = this.myDropDownList.getItem(args.index);
        if (item != null) {
            this.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
        }
    };
}

