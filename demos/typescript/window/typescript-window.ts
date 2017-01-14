/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

function createWindow(showWindowButtonSelector, hideWindowButtonSelector, resizeCheckBoxSelector, dragCheckBoxSelector, windowSelector, jqxWidgetSelector, tabSelector) {
    var buttonOptions: jqwidgets.ButtonOptions = {
        width: '70px'
    };
    var showButtonInstance: jqwidgets.jqxButton = jqwidgets.createInstance(showWindowButtonSelector, 'jqxButton', buttonOptions);
    buttonOptions.width = '65px';
    var hideButtonInstance: jqwidgets.jqxButton = jqwidgets.createInstance(hideWindowButtonSelector, 'jqxButton', buttonOptions);
    
    var checkBoxOptions: jqwidgets.CheckBoxOptions = {
        width: '185px',
        checked: true
    };
    var resizeCheckBoxInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(resizeCheckBoxSelector, 'jqxCheckBox', checkBoxOptions);
    
    var jqWidget = document.getElementById(jqxWidgetSelector);
    var offsetLeft = jqWidget.offsetLeft;
    var offsetTop = jqWidget.offsetTop;
    // defining options
    var windowOptions: jqwidgets.WindowOptions = {
        position: { x: offsetLeft + 50, y: offsetTop + 50 },
        showCollapseButton: true,
        maxHeight: 400,
        maxWidth: 700,
        minHeight: 200,
        minWidth: 200,
        height: 300,
        width: 500,
        resizable: true,
        draggable: true,
        initContent: function () {
            //defining option
            var tabOptions: jqwidgets.TabsOptions = {
                height: '100%',
                width: '100%'
            };
            //creating instance
            var tabInstanace: jqwidgets.jqxTabs = jqwidgets.createInstance(tabSelector, 'jqxTabs', tabOptions);
            var windowInstance: jqwidgets.jqxWindow = jqwidgets.createInstance(windowSelector, 'jqxWindow');
            windowInstance.focus();
        }
    };
    var windowInstance: jqwidgets.jqxWindow = jqwidgets.createInstance(windowSelector, 'jqxWindow', windowOptions);

    resizeCheckBoxInstance.addEventHandler('change', function (event) {
        windowOptions.resizable = true;
        if (event.args.checked) {
            windowOptions.resizable = true;
            windowInstance.setOptions(windowOptions);
        }
        else {
            windowOptions.resizable = false;
            windowInstance.setOptions(windowOptions);
        }
    });
    var dragCheckBoxInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(dragCheckBoxSelector, 'jqxCheckBox', checkBoxOptions);
    dragCheckBoxInstance.addEventHandler('change', function (event) {
        if (event.args.checked) {
            windowOptions.draggable = true;
            windowInstance.setOptions(windowOptions);
        }
        else {
            windowOptions.draggable = false;
            windowInstance.setOptions(windowOptions);
        }
    });

    showButtonInstance.addEventHandler('click', function (event) {
        windowInstance.open();
    });
    hideButtonInstance.addEventHandler('click', function (event) {
        windowInstance.close();
    });
}