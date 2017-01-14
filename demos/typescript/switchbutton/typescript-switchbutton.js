/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createSwitchButton(button1Selector, button2Selector, button3Selector, button4Selector, button5Selector, eventsSelector) {
    // initialization options - validated in typescript
    // jqwidgets.SwitchButtonOptions has generated TS definition
    var optionsButtons = {
        height: 27,
        width: 81,
        checked: true
    };
    //creating instances
    var eventsLog = document.getElementById(eventsSelector);
    var button1 = jqwidgets.createInstance(button1Selector, 'jqxSwitchButton', optionsButtons);
    var button2 = jqwidgets.createInstance(button2Selector, 'jqxSwitchButton', optionsButtons);
    var button3 = jqwidgets.createInstance(button3Selector, 'jqxSwitchButton', optionsButtons);
    var button4 = jqwidgets.createInstance(button4Selector, 'jqxSwitchButton', optionsButtons);
    optionsButtons.checked = false;
    var button5 = jqwidgets.createInstance(button5Selector, 'jqxSwitchButton', optionsButtons);
    var elements = document.getElementsByClassName("jqx-switchbutton");
    for (var i = 0; i < elements.length; i++) {
        var currentButton = elements[i];
        currentButton.addEventListener('click', function (event) {
            var isChecked = this.getAttribute("aria-checked") !== 'false';
            var parentElement = this.parentElement.parentElement;
            var label = parentElement.getElementsByClassName('settings-label')[0].innerText;
            if (isChecked) {
                eventsLog.innerText = label + ': Unchecked';
            }
            else {
                eventsLog.innerText = label + ': Checked';
            }
        }, false);
    }
}
//# sourceMappingURL=typescript-switchbutton.js.map