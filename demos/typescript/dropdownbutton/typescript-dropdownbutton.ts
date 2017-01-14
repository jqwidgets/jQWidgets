/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDropDownButton(DropDownButtonSelector, TreeSelector, CheckBoxSelector)
{   
    // initialization options - validated in typescript
    // jqwidgets.DropDownButtonOptions has generated TS definition
    let DropDownButtonOptions: jqwidgets.DropDownButtonOptions =
    {
        width: 150, height: 25
    };
    let TreeOptions: jqwidgets.TreeOptions =
    {
        width: 200
    };
    let CheckBoxOptions: jqwidgets.CheckBoxOptions =
    {

    };

    // creates an instance
    let myDropDownButton: jqwidgets.jqxDropDownButton = jqwidgets.createInstance(DropDownButtonSelector, 'jqxDropDownButton', DropDownButtonOptions);
    let myTree: jqwidgets.jqxTree = jqwidgets.createInstance(TreeSelector, 'jqxTree', TreeOptions);
    let myCheckBox: jqwidgets.jqxCheckBox = jqwidgets.createInstance(CheckBoxSelector, 'jqxCheckBox', CheckBoxOptions);

    myDropDownButton.setContent('<div style= "position: relative; margin-left: 3px; margin-top: 5px;">Home</div>');

    myTree.addEventHandler('select', function (event)
    {
        let args = event.args;
        let item = myTree.getItem(args.element);
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
        myDropDownButton.setContent(dropDownContent);
    });

    myCheckBox.addEventHandler('change', function (event)
    {
        let DropDownButtonAutoOpen: jqwidgets.DropDownButtonOptions =
        {
            autoOpen: event.args.checked
        };
        myDropDownButton.setOptions(DropDownButtonAutoOpen)
    });
}