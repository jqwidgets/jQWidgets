/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createButtonGroup(ButtonGroupSelector, DefaultModeSelector, RadioModeSelector, CheckBoxModeSelector)
{   
    // initialization options - validated in typescript
    // jqwidgets.ButtonGroupOptions has generated TS definition
    let DefaultMode: jqwidgets.ButtonGroupOptions =
    {
        mode: 'default'
    };
    let RadioMode: jqwidgets.ButtonGroupOptions =
    {
        mode: 'radio'
    };
    let CheckBoxMode: jqwidgets.ButtonGroupOptions =
    {
        mode: 'checkbox'
    };
    let CheckedRadioButton: jqwidgets.RadioButtonOptions =
    {
        checked: true
    };
    let ModeOptions: jqwidgets.ButtonGroupOptions =
    {

    };

    // creates an instance
    let myButtonGroup: jqwidgets.jqxButtonGroup = jqwidgets.createInstance(ButtonGroupSelector, 'jqxButtonGroup', DefaultMode);   
    let myDefaultMode: jqwidgets.jqxButtonGroup = jqwidgets.createInstance(DefaultModeSelector, 'jqxRadioButton', CheckedRadioButton);
    let myRadioMode: jqwidgets.jqxButtonGroup = jqwidgets.createInstance(RadioModeSelector, 'jqxRadioButton', ModeOptions);
    let myCheckBoxMode: jqwidgets.jqxButtonGroup = jqwidgets.createInstance(CheckBoxModeSelector, 'jqxRadioButton', ModeOptions);

    myDefaultMode.addEventHandler('checked', function ()
    {
        myButtonGroup.setOptions(DefaultMode);
    });

    myRadioMode.addEventHandler('checked', function ()
    {
        myButtonGroup.setOptions(RadioMode);
    });

    myCheckBoxMode.addEventHandler('checked', function ()
    {
        myButtonGroup.setOptions(CheckBoxMode);
    });

    myButtonGroup.addEventHandler('buttonclick', function (event)
    {
        let clickedButton = event.args.button;
        document.getElementById('events').innerText = ("Clicked: " + clickedButton[0].id);
    });

}

