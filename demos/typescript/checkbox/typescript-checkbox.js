/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createCheckBox(checkboxselector1, checkboxselector2, checkboxselector3, checkboxselector4, checkboxselector5, checkboxselector6, checkboxselector7, checkboxselector8, checkboxselector9, checkboxselector10, checkboxselector11, checkboxselector12, checkboxselector13) {
    // initialization options - validated in typescript
    // jqwidgets.CheckBoxOptions has generated TS definition
    var options = {
        width: 120, height: 25
    };
    var checkedOptions = {
        width: 120, height: 25, checked: true
    };
    var unCheckedOptions = {
        width: 120, height: 25, checked: false
    };
    var hasThreeStatesOption = {
        width: 120, height: 25, hasThreeStates: true, checked: null
    };
    var DisabledOptions = {
        width: 120, height: 25, checked: true, disabled: true
    };
    // creates an instance
    var myCheckBox1 = jqwidgets.createInstance(checkboxselector1, 'jqxCheckBox', options);
    var myCheckBox2 = jqwidgets.createInstance(checkboxselector2, 'jqxCheckBox', checkedOptions);
    var myCheckBox3 = jqwidgets.createInstance(checkboxselector3, 'jqxCheckBox', options);
    var myCheckBox4 = jqwidgets.createInstance(checkboxselector4, 'jqxCheckBox', options);
    var myCheckBox5 = jqwidgets.createInstance(checkboxselector5, 'jqxCheckBox', options);
    var myCheckBox6 = jqwidgets.createInstance(checkboxselector6, 'jqxCheckBox', options);
    var myCheckBox7 = jqwidgets.createInstance(checkboxselector7, 'jqxCheckBox', options);
    var myCheckBox8 = jqwidgets.createInstance(checkboxselector8, 'jqxCheckBox', options);
    var myCheckBox9 = jqwidgets.createInstance(checkboxselector9, 'jqxCheckBox', options);
    var myCheckBox10 = jqwidgets.createInstance(checkboxselector10, 'jqxCheckBox', checkedOptions);
    var myCheckBox11 = jqwidgets.createInstance(checkboxselector11, 'jqxCheckBox', unCheckedOptions);
    var myCheckBox12 = jqwidgets.createInstance(checkboxselector12, 'jqxCheckBox', hasThreeStatesOption);
    var myCheckBox13 = jqwidgets.createInstance(checkboxselector13, 'jqxCheckBox', DisabledOptions);
    myCheckBox10.addEventHandler('change', function (event) {
        var checked = event.args.checked;
        var checkbox = document.getElementById('jqxCheckBox10').children;
        if (checked) {
            checkbox[1].innerHTML = 'Checked';
        }
        else {
            checkbox[1].innerHTML = 'Unchecked';
        }
    });
    myCheckBox11.addEventHandler('change', function (event) {
        var checked = event.args.checked;
        var checkbox = document.getElementById('jqxCheckBox11').children;
        if (checked) {
            checkbox[1].innerHTML = 'Checked';
        }
        else {
            checkbox[1].innerHTML = 'Unchecked';
        }
    });
    myCheckBox12.addEventHandler('change', function (event) {
        var checked = event.args.checked;
        var checkbox = document.getElementById('jqxCheckBox12').children;
        if (checked) {
            checkbox[1].innerHTML = 'Checked';
        }
        else if (checked == false) {
            checkbox[1].innerHTML = 'Unchecked';
        }
        else {
            checkbox[1].innerHTML = 'Indeterminate';
        }
    });
}
//# sourceMappingURL=typescript-checkbox.js.map