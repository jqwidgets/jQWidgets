/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createMenu(selector, disabledSelector, openSelector, hoverSelector, topLevelArrowsSelector, animationSelector) {
    // initialization options - validated in typescript
    // jqwidgets.MenuOptions has generated TS definition
    var options = {
        width: '670',
        height: '30px',
        showTopLevelArrows: false
    };
    // creates an instance
    var myMenu = jqwidgets.createInstance(selector, 'jqxMenu', options);
    var optionsCheckBoxes = {
        width: '150px',
        height: '20px'
    };
    var disabled = jqwidgets.createInstance(disabledSelector, 'jqxCheckBox', optionsCheckBoxes);
    var open = jqwidgets.createInstance(openSelector, 'jqxCheckBox', optionsCheckBoxes);
    var hover = jqwidgets.createInstance(hoverSelector, 'jqxCheckBox', optionsCheckBoxes);
    var topLevelArrows = jqwidgets.createInstance(topLevelArrowsSelector, 'jqxCheckBox', optionsCheckBoxes);
    var animation = jqwidgets.createInstance(animationSelector, 'jqxCheckBox', optionsCheckBoxes);
    animation.addEventHandler('change', function (event) {
        var value = event.args.checked;
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
        var value = event.args.checked;
        // enable or disable the menu
        if (!value) {
            myMenu.disabled = false;
        }
        else {
            myMenu.disabled = true;
        }
    });
    hover.addEventHandler('change', function (event) {
        var value = event.args.checked;
        // enable or disable the menu's hover effect.
        if (!value) {
            myMenu.enableHover = false;
        }
        else {
            myMenu.enableHover = true;
        }
    });
    open.addEventHandler('change', function (event) {
        var value = event.args.checked;
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value) {
            myMenu.autoOpen = false;
        }
        else {
            myMenu.autoOpen = true;
        }
    });
    topLevelArrows.addEventHandler('change', function (event) {
        var value = event.args.checked;
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
//# sourceMappingURL=typescript-menu.js.map