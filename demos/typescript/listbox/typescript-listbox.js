/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createListBox(selector) {
    var source = [
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
    // initialization options - validated in typescript
    // jqwidgets.ListBoxOptions has generated TS definition
    var options = {
        selectedIndex: 3,
        source: source,
        width: 200,
        height: 250
    };
    // creates an instance
    var myListBox = jqwidgets.createInstance(selector, 'jqxListBox', options);
}
//# sourceMappingURL=typescript-listbox.js.map