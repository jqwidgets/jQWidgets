/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createRadioButtons(button1, button2, button3, button4, eventsLog) {
    // initialization options - validated in typescript
    // jqwidgets.RadioButtonOptions has generated TS definition
    let options1: jqwidgets.RadioButtonOptions = {
        width: 250,
        height: 25,
        checked: true
    };

    // creates an instance
    let radioButton1: jqwidgets.jqxRadioButton = jqwidgets.createInstance(button1, 'jqxRadioButton', options1);

    let options2: jqwidgets.RadioButtonOptions = { width: 250, height: 25 };
    let radioButton2: jqwidgets.jqxRadioButton = jqwidgets.createInstance(button2, 'jqxRadioButton', options2);

    let options3: jqwidgets.RadioButtonOptions = { width: 250, height: 25 };
    let radioButton3: jqwidgets.jqxRadioButton = jqwidgets.createInstance(button3, 'jqxRadioButton', options3);

    let options4: jqwidgets.RadioButtonOptions = { width: 250, height: 25, disabled: true };
    let radioButton4: jqwidgets.jqxRadioButton = jqwidgets.createInstance(button4, 'jqxRadioButton', options4);

    let log = document.getElementById(eventsLog);
    let clearLog = function () {
        if (log.children.length >= 2) {
            log.innerHTML = '';
        }
    };

    radioButton1.addEventHandler('change', function (event) {
        clearLog();
        let checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    });

    radioButton2.addEventHandler('change', function (event) {
        clearLog();
        let checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    });

    radioButton3.addEventHandler('change', function (event) {
        clearLog();
        let checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    });
}