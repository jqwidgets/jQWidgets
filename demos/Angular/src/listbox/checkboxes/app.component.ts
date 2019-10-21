import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxListBox', { static: false }) myListBox: jqxListBoxComponent;
    @ViewChild('Events', { static: false }) Events: ElementRef;
    @ViewChild('CheckedItems', { static: false }) CheckedItems: ElementRef;

    ngAfterViewInit(): void {
        this.myListBox.checkIndex(0);
        this.myListBox.checkIndex(1);
        this.myListBox.checkIndex(2);
        this.myListBox.checkIndex(5);
    }

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

    checkChange(event: any): void {
        let eventsContainer = this.Events.nativeElement;
        let checkedItemsContainer = this.CheckedItems.nativeElement;

        if (event.args.checked) {
            eventsContainer.innerHTML = 'Checked: ' + event.args.label;
        }
        else {
            eventsContainer.innerHTML = 'Unchecked: ' + event.args.label;
        }

        let items = this.myListBox.getCheckedItems();
        let checkedItems = '';
        for (let i = 0; i < items.length; i++) {
            if (i < items.length - 1) {
                checkedItems += items[i].label + ', ';
            }
            else checkedItems += items[i].label;
        }

        checkedItemsContainer.innerHTML = checkedItems;
    };
}