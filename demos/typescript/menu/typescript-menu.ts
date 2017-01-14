/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createMenu(selector, disabledSelector, openSelector, hoverSelector, topLevelArrowsSelector, animationSelector) {
    // initialization options - validated in typescript
    // jqwidgets.MenuOptions has generated TS definition
    let options: jqwidgets.MenuOptions = {
        width: '670',
        height: '30px',
        showTopLevelArrows: false
    };

    // creates an instance
    let myMenu: jqwidgets.jqxMenu = jqwidgets.createInstance(selector, 'jqxMenu', options);

    let optionsCheckBoxes: jqwidgets.CheckBoxOptions = {
        width: '150px',
        height: '20px'
    };

    let disabled: jqwidgets.jqxCheckBox = jqwidgets.createInstance(disabledSelector, 'jqxCheckBox', optionsCheckBoxes);
    let open: jqwidgets.jqxCheckBox = jqwidgets.createInstance(openSelector, 'jqxCheckBox', optionsCheckBoxes);
    let hover: jqwidgets.jqxCheckBox = jqwidgets.createInstance(hoverSelector, 'jqxCheckBox', optionsCheckBoxes);
    let topLevelArrows: jqwidgets.jqxCheckBox = jqwidgets.createInstance(topLevelArrowsSelector, 'jqxCheckBox', optionsCheckBoxes);
    let animation: jqwidgets.jqxCheckBox = jqwidgets.createInstance(animationSelector, 'jqxCheckBox', optionsCheckBoxes);
    animation.addEventHandler('change', function (event) {
        let value = event.args.checked;
        // enable or disable the menu's animation.
        if (!value) {
            options.animationShowDuration = 0;
            options.animationHideDuration = 0;
            options.animationShowDelay = 0;
            myMenu.setOptions(options);
        }
        else {
            options.animationShowDuration = 300;
            options.animationHideDuration = 200;
            options.animationShowDelay = 200;
            myMenu.setOptions(options);
        }
    });

    disabled.addEventHandler('change', function (event) {
        let value = event.args.checked;
        // enable or disable the menu
        if (!value) {
            myMenu.disabled = false;
        }
        else {
            myMenu.disabled = true;
        }
    });

    hover.addEventHandler('change', function (event) {
        let value = event.args.checked;
        // enable or disable the menu's hover effect.
        if (!value) {
            myMenu.enableHover = false;
        }
        else {
            myMenu.enableHover = true;
        }
    });

    open.addEventHandler('change', function (event) {
        let value = event.args.checked;
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value) {
            myMenu.autoOpen = false;
        }
        else {
            myMenu.autoOpen = true;
        }
    });

    topLevelArrows.addEventHandler('change', function (event) {
        let value = event.args.checked;        
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value) {
            options.showTopLevelArrows = false;
            myMenu.setOptions(options);
        }
        else {
            options.showTopLevelArrows = true;
            myMenu.setOptions(options);
        }
    });
}