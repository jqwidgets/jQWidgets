/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDropDownButton(DropDownButtonSelector, TreeSelector, CheckBoxSelector) {
    // initialization options - validated in typescript
    // jqwidgets.DropDownButtonOptions has generated TS definition
    var DropDownButtonOptions = {
        width: 150, height: 25
    };
    var TreeOptions = {
        width: 200
    };
    var CheckBoxOptions = {};
    // creates an instance
    var myDropDownButton = jqwidgets.createInstance(DropDownButtonSelector, 'jqxDropDownButton', DropDownButtonOptions);
    var myTree = jqwidgets.createInstance(TreeSelector, 'jqxTree', TreeOptions);
    var myCheckBox = jqwidgets.createInstance(CheckBoxSelector, 'jqxCheckBox', CheckBoxOptions);
    myDropDownButton.setContent('<div style= "position: relative; margin-left: 3px; margin-top: 5px;">Home</div>');
    myTree.addEventHandler('select', function (event) {
        var args = event.args;
        var item = myTree.getItem(args.element);
        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
        myDropDownButton.setContent(dropDownContent);
    });
    myCheckBox.addEventHandler('change', function (event) {
        var DropDownButtonAutoOpen = {
            autoOpen: event.args.checked
        };
        myDropDownButton.setOptions(DropDownButtonAutoOpen);
    });
}
//# sourceMappingURL=typescript-dropdownbutton.js.map