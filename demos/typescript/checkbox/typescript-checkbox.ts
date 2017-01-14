/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createCheckBox(checkboxselector1, checkboxselector2, checkboxselector3, checkboxselector4, checkboxselector5, checkboxselector6,
    checkboxselector7, checkboxselector8, checkboxselector9, checkboxselector10, checkboxselector11, checkboxselector12, checkboxselector13)
{
    // initialization options - validated in typescript
    // jqwidgets.CheckBoxOptions has generated TS definition
    let options: jqwidgets.CheckBoxOptions =
        {
            width: 120, height: 25
        };
    let checkedOptions: jqwidgets.CheckBoxOptions =
        {
            width: 120, height: 25, checked: true
        };
    let unCheckedOptions: jqwidgets.CheckBoxOptions =
        {
            width: 120, height: 25, checked: false
        };
    let hasThreeStatesOption: jqwidgets.CheckBoxOptions =
        {
            width: 120, height: 25, hasThreeStates: true, checked: null
        };
    let DisabledOptions: jqwidgets.CheckBoxOptions =
        {
            width: 120, height: 25, checked: true, disabled: true
        };

    // creates an instance
    let myCheckBox1: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector1, 'jqxCheckBox', options);
    let myCheckBox2: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector2, 'jqxCheckBox', checkedOptions);
    let myCheckBox3: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector3, 'jqxCheckBox', options);
    let myCheckBox4: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector4, 'jqxCheckBox', options);
    let myCheckBox5: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector5, 'jqxCheckBox', options);
    let myCheckBox6: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector6, 'jqxCheckBox', options);
    let myCheckBox7: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector7, 'jqxCheckBox', options);
    let myCheckBox8: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector8, 'jqxCheckBox', options);
    let myCheckBox9: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector9, 'jqxCheckBox', options);
    let myCheckBox10: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector10, 'jqxCheckBox', checkedOptions);
    let myCheckBox11: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector11, 'jqxCheckBox', unCheckedOptions);
    let myCheckBox12: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector12, 'jqxCheckBox', hasThreeStatesOption);
    let myCheckBox13: jqwidgets.jqxCheckBox = jqwidgets.createInstance(checkboxselector13, 'jqxCheckBox', DisabledOptions);

    myCheckBox10.addEventHandler('change', function (event)
    {
        let checked = event.args.checked;
        let checkbox = document.getElementById('jqxCheckBox10').children;

        if (checked)
        {
            checkbox[1].innerHTML = 'Checked';
        }
        else
        {
            checkbox[1].innerHTML = 'Unchecked';
        }
    });

    myCheckBox11.addEventHandler('change', function (event)
    {
        let checked = event.args.checked;
        let checkbox = document.getElementById('jqxCheckBox11').children;

        if (checked)
        {
            checkbox[1].innerHTML = 'Checked';
        }
        else
        {
            checkbox[1].innerHTML = 'Unchecked';
        }
    });

    myCheckBox12.addEventHandler('change', function (event)
    {
        let checked = event.args.checked;
        let checkbox = document.getElementById('jqxCheckBox12').children;

        if (checked)
        {
            checkbox[1].innerHTML = 'Checked';
        }
        else if (checked == false)
        {
            checkbox[1].innerHTML = 'Unchecked';
        }
        else
        {
            checkbox[1].innerHTML = 'Indeterminate';
        }
    });

}
