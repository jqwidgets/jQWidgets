/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

function createSwitchButton(button1Selector, button2Selector, button3Selector, button4Selector, button5Selector, eventsSelector) {
    // initialization options - validated in typescript
    // jqwidgets.SwitchButtonOptions has generated TS definition
    let optionsButtons: jqwidgets.SwitchButtonOptions = {
        height: 27,
        width: 81,
        checked: true
    }
    //creating instances
    let eventsLog = document.getElementById(eventsSelector);
    let button1: jqwidgets.jqxSwitchButton = jqwidgets.createInstance(button1Selector, 'jqxSwitchButton', optionsButtons);
    let button2: jqwidgets.jqxSwitchButton = jqwidgets.createInstance(button2Selector, 'jqxSwitchButton', optionsButtons);
    let button3: jqwidgets.jqxSwitchButton = jqwidgets.createInstance(button3Selector, 'jqxSwitchButton', optionsButtons);
    let button4: jqwidgets.jqxSwitchButton = jqwidgets.createInstance(button4Selector, 'jqxSwitchButton', optionsButtons);
    optionsButtons.checked = false;
    let button5: jqwidgets.jqxSwitchButton = jqwidgets.createInstance(button5Selector, 'jqxSwitchButton', optionsButtons);

    let elements = document.getElementsByClassName("jqx-switchbutton");
    for (let i = 0; i < elements.length; i++) {
        let currentButton = elements[i];
        currentButton.addEventListener('click', function (event) {
            let isChecked = this.getAttribute("aria-checked") !== 'false';
            let parentElement = this.parentElement.parentElement;
            let label = parentElement.getElementsByClassName('settings-label')[0].innerText;
            if (isChecked) {
                eventsLog.innerText = label + ': Unchecked';
            } else {
                eventsLog.innerText = label + ': Checked';
            }
        }, false);
    }
}