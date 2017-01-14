/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createProgressBar(horizontal, vertical, inputIdName, button, checkbox, customTextCheckbox) {
    // initialization options - validated in typescript
    // jqwidgets.ProgressBarOptions has generated TS definition
    let options: jqwidgets.ProgressBarOptions = {
        width: 250,
        height: 30,
        value: 50
    };

    // creates an instance
    let horizontalProgressBar: jqwidgets.jqxProgressBar = jqwidgets.createInstance(horizontal, 'jqxProgressBar', options);

    let verticalProgressBarOptions: jqwidgets.ProgressBarOptions = {
        width: 30,
        height: 250,
        value: 50,
        orientation: 'vertical'
    };
    let verticalProgressBar: jqwidgets.jqxProgressBar = jqwidgets.createInstance(vertical, 'jqxProgressBar', verticalProgressBarOptions);
    
    let buttonOptions: jqwidgets.ButtonOptions = { width: 150 };
    let buttonUpdate: jqwidgets.jqxButton = jqwidgets.createInstance(button, 'jqxButton', buttonOptions);

    buttonUpdate.addEventHandler('click', function () {
        let input = (<HTMLInputElement>document.getElementById(inputIdName));
        let value: any = input.value;
        // Convert to Number
        value = parseInt(value);
        horizontalProgressBar.val(value);
        verticalProgressBar.val(value);
    });

    let checkboxOptions: jqwidgets.CheckBoxOptions = {};
    let checkboxInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkbox, 'jqxCheckBox', checkboxOptions);
    let checkboxCustomInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(customTextCheckbox, 'jqxCheckBox', checkboxOptions);

    checkboxInstance.addEventHandler('change', function (event) {
        horizontalProgressBar.showText = event.args.checked;
        horizontalProgressBar.refresh();
        verticalProgressBar.showText = event.args.checked;
        verticalProgressBar.refresh();
    });

    let renderText = function (text:string):string {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    }
    checkboxCustomInstance.addEventHandler('change', function (event) {
        if (event.args.checked) {
            horizontalProgressBar.renderText = renderText;
            horizontalProgressBar.refresh();

            verticalProgressBar.renderText = renderText;
            verticalProgressBar.refresh();
        }
        else {
            horizontalProgressBar.renderText = null;
            horizontalProgressBar.refresh();

            verticalProgressBar.renderText = null;
            verticalProgressBar.refresh();
        }

    });
}