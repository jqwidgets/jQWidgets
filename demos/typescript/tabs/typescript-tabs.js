/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createTabs(jqxTabsSelector, settingsSelector, animationSelector, contentAnimationSelector) {
    //options definitions
    var tabsOptions = {
        width: '90%',
        height: 200,
        position: 'top'
    };
    // creating an instance
    var tabsInstance = jqwidgets.createInstance(jqxTabsSelector, 'jqxTabs', tabsOptions);
    var settingsElements = document.getElementById(settingsSelector).getElementsByTagName('div');
    for (var i = 0; i < settingsElements.length; i++)
        settingsElements[i].style.marginTop = '10px';
    var checkBoxOptions = {};
    //creating other instances
    var animationCheckBoxInstance = jqwidgets.createInstance(animationSelector, 'jqxCheckBox', checkBoxOptions);
    var contentAnimationCheckBoxInstance = jqwidgets.createInstance(contentAnimationSelector, 'jqxCheckBox', checkBoxOptions);
    animationCheckBoxInstance.addEventHandler('change', function (event) {
        var checked = event.args.checked;
        tabsOptions.selectionTracker = checked;
        tabsInstance.setOptions(tabsOptions);
    });
    contentAnimationCheckBoxInstance.addEventHandler('change', function (event) {
        var checked = event.args.checked;
        tabsOptions.animationType = 'fade';
        if (checked) {
            tabsInstance.setOptions(tabsOptions);
        }
        else {
            tabsOptions.animationType = 'none';
            tabsInstance.setOptions(tabsOptions);
        }
    });
}
//# sourceMappingURL=typescript-tabs.js.map