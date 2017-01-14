/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createRadioButtons(button1, button2, button3, button4, eventsLog) {
    // initialization options - validated in typescript
    // jqwidgets.RadioButtonOptions has generated TS definition
    var options1 = {
        width: 250,
        height: 25,
        checked: true
    };
    // creates an instance
    var radioButton1 = jqwidgets.createInstance(button1, 'jqxRadioButton', options1);
    var options2 = { width: 250, height: 25 };
    var radioButton2 = jqwidgets.createInstance(button2, 'jqxRadioButton', options2);
    var options3 = { width: 250, height: 25 };
    var radioButton3 = jqwidgets.createInstance(button3, 'jqxRadioButton', options3);
    var options4 = { width: 250, height: 25, disabled: true };
    var radioButton4 = jqwidgets.createInstance(button4, 'jqxRadioButton', options4);
    var log = document.getElementById(eventsLog);
    var clearLog = function () {
        if (log.children.length >= 2) {
            log.innerHTML = '';
        }
    };
    radioButton1.addEventHandler('change', function (event) {
        clearLog();
        var checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    });
    radioButton2.addEventHandler('change', function (event) {
        clearLog();
        var checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    });
    radioButton3.addEventHandler('change', function (event) {
        clearLog();
        var checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    });
}
//# sourceMappingURL=typescript-radiobutton.js.map