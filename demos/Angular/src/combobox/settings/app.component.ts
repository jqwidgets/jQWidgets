import { Component, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComboBox', { static: false }) myComboBox: jqxComboBoxComponent;

    comboBoxSource: string[] = [
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
        'Iced Coffee',
        'Indian filter coffee',
        'Instant coffee',
        'Irish coffee',
        'Liqueur coffee'
    ];

    dropDownListSource: string[] = [
        'Starts with',
        'Starts with(Case Sensitive)',
        'Ends with',
        'Ends with(Case Sensitive)',
        'Contains',
        'Contains(Case Sensitive)',
        'Equal',
        'Equal(Case Sensitive)',
    ];

    btnOpenOnClick(): void {
        // show popup.
        this.myComboBox.open();
    };

    btnCloseOnClick(): void {
        // hide popup.
        this.myComboBox.close();
    };

    checkBoxAutoCompleteOnChange(event: any): void {
        // set autocomplete property.
        let checked = event.args.checked;
        this.myComboBox.autoComplete(checked);
    };

    checkBoxEnabledOnChange(event: any): void {
        // enable or disable.
        let checked = !event.args.checked;
        this.myComboBox.disabled(checked);
    };

    dropDownListOnSelect(event: any): void {
        // set search mode.
        let searchType = '';
        switch (event.args.index) {
            case 0:
                searchType = 'startswithignorecase';
                break;
            case 1:
                searchType = 'startswith';
                break;
            case 2:
                searchType = 'endswithignorecase';
                break;
            case 3:
                searchType = 'endswith';
                break;
            case 4:
                searchType = 'containsignorecase';
                break;
            case 5:
                searchType = 'contains';
                break;
            case 6:
                searchType = 'equalsignorecase';
                break;
            case 7:
                searchType = 'equals';
                break;
        }
        this.myComboBox.searchMode(searchType);
    };
}
