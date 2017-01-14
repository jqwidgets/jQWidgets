/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDropDownList(selector)
{   
    let source = [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Cafe Bombon",
        "Cafe au lait",
        "Caffe Corretto",
        "Cafe Crema",
        "Caffe Latte",
        "Caffe macchiato",
        "Cafe melange",
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
        "Greek frappe coffee",
        "Iced Cofee",
        "Indian filter coffee",
        "Instant coffee",
        "Irish coffee",
        "Liqueur coffee"
    ];

    // initialization options - validated in typescript
    // jqwidgets.DropDownListOptions has generated TS definition
    let options: jqwidgets.DropDownListOptions =
    {
        source: source, selectedIndex: 1, width: '200', height: '25'
    };

    // creates an instance
    let myDropDownList: jqwidgets.jqxDropDownList = jqwidgets.createInstance(selector, 'jqxDropDownList', options);   
}