/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createProgressBar(horizontal, vertical, inputIdName, button, checkbox, customTextCheckbox) {
    // initialization options - validated in typescript
    // jqwidgets.ProgressBarOptions has generated TS definition
    var options = {
        width: 250,
        height: 30,
        value: 50
    };
    // creates an instance
    var horizontalProgressBar = jqwidgets.createInstance(horizontal, 'jqxProgressBar', options);
    var verticalProgressBarOptions = {
        width: 30,
        height: 250,
        value: 50,
        orientation: 'vertical'
    };
    var verticalProgressBar = jqwidgets.createInstance(vertical, 'jqxProgressBar', verticalProgressBarOptions);
    var buttonOptions = { width: 150 };
    var buttonUpdate = jqwidgets.createInstance(button, 'jqxButton', buttonOptions);
    buttonUpdate.addEventHandler('click', function () {
        var input = document.getElementById(inputIdName);
        var value = input.value;
        // Convert to Number
        value = parseInt(value);
        horizontalProgressBar.val(value);
        verticalProgressBar.val(value);
    });
    var checkboxOptions = {};
    var checkboxInstance = jqwidgets.createInstance(checkbox, 'jqxCheckBox', checkboxOptions);
    var checkboxCustomInstance = jqwidgets.createInstance(customTextCheckbox, 'jqxCheckBox', checkboxOptions);
    checkboxInstance.addEventHandler('change', function (event) {
        horizontalProgressBar.showText = event.args.checked;
        horizontalProgressBar.refresh();
        verticalProgressBar.showText = event.args.checked;
        verticalProgressBar.refresh();
    });
    var renderText = function (text) {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    };
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
//# sourceMappingURL=typescript-progressbar.js.map