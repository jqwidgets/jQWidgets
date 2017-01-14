/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createButtonGroup(ButtonGroupSelector, DefaultModeSelector, RadioModeSelector, CheckBoxModeSelector) {
    // initialization options - validated in typescript
    // jqwidgets.ButtonGroupOptions has generated TS definition
    var DefaultMode = {
        mode: 'default'
    };
    var RadioMode = {
        mode: 'radio'
    };
    var CheckBoxMode = {
        mode: 'checkbox'
    };
    var CheckedRadioButton = {
        checked: true
    };
    var ModeOptions = {};
    // creates an instance
    var myButtonGroup = jqwidgets.createInstance(ButtonGroupSelector, 'jqxButtonGroup', DefaultMode);
    var myDefaultMode = jqwidgets.createInstance(DefaultModeSelector, 'jqxRadioButton', CheckedRadioButton);
    var myRadioMode = jqwidgets.createInstance(RadioModeSelector, 'jqxRadioButton', ModeOptions);
    var myCheckBoxMode = jqwidgets.createInstance(CheckBoxModeSelector, 'jqxRadioButton', ModeOptions);
    myDefaultMode.addEventHandler('checked', function () {
        myButtonGroup.setOptions(DefaultMode);
    });
    myRadioMode.addEventHandler('checked', function () {
        myButtonGroup.setOptions(RadioMode);
    });
    myCheckBoxMode.addEventHandler('checked', function () {
        myButtonGroup.setOptions(CheckBoxMode);
    });
    myButtonGroup.addEventHandler('buttonclick', function (event) {
        var clickedButton = event.args.button;
        document.getElementById('events').innerText = ("Clicked: " + clickedButton[0].id);
    });
}
//# sourceMappingURL=typescript-buttongroup.js.map