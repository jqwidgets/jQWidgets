window.onload = function () {
    document.querySelector('smart-combo-box').dataSource =
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
            "Alabala",
            "Indian filter coffee",
            "Instant coffee",
            "Irish coffee",
            "Liqueur coffee"
        ];

    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'auto';
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'bottom';
    });

    document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'overlay-bottom';
    });

    document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'overlay-center';
    });

    document.getElementsByTagName('smart-radio-button')[4].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'overlay-top';
    });

    document.getElementsByTagName('smart-radio-button')[5].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'top';
    });

    document.getElementsByTagName('smart-radio-button')[6].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'center-bottom';
    });

    document.getElementsByTagName('smart-radio-button')[7].addEventListener('change', function () {
        document.querySelector('smart-combo-box').dropDownPosition = 'center-top';
    });
}