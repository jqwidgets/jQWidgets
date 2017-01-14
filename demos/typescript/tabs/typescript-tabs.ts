/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

function createTabs(jqxTabsSelector, settingsSelector, animationSelector, contentAnimationSelector) 
{
    //options definitions
    let tabsOptions: jqwidgets.TabsOptions = {
        width: '90%',
        height: 200,
        position: 'top'
    };
    // creating an instance
    let tabsInstance: jqwidgets.jqxTabs = jqwidgets.createInstance(jqxTabsSelector, 'jqxTabs', tabsOptions);
    let settingsElements = document.getElementById(settingsSelector).getElementsByTagName('div');
    for (let i = 0; i < settingsElements.length; i++) settingsElements[i].style.marginTop = '10px';
    let checkBoxOptions: jqwidgets.CheckBoxOptions = {
        //theme : theme
    };
    //creating other instances
    let animationCheckBoxInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(animationSelector, 'jqxCheckBox', checkBoxOptions);
    let contentAnimationCheckBoxInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(contentAnimationSelector, 'jqxCheckBox', checkBoxOptions);
    animationCheckBoxInstance.addEventHandler('change', function (event) {
        var checked = event.args.checked;
        tabsOptions.selectionTracker = checked;
        tabsInstance.setOptions(tabsOptions);
    });

    contentAnimationCheckBoxInstance.addEventHandler('change', function (event) {
        let checked = event.args.checked;
        tabsOptions.animationType = 'fade';
        if (checked) {
            tabsInstance.setOptions(tabsOptions);
        }
        else
        {
            tabsOptions.animationType = 'none';
            tabsInstance.setOptions(tabsOptions);
        }
    });
}