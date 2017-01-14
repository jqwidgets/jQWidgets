/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createResponsivePanel(selector, menuSelector, contentSelector, toggleResponsivePanel, resizeSmall, resizeBig, ownerPanelId) {
    var menuShortName = menuSelector.substring(1);
    var domMenu = document.getElementById(menuShortName);
    domMenu.style.visibility = 'visible';
    var menuOptions = { height: '100%', width: '100%' };
    var menu = jqwidgets.createInstance(menuSelector, 'jqxTree', menuOptions);
    var contentOptions = {};
    var content = jqwidgets.createInstance(contentSelector, 'jqxPanel', contentOptions);
    //Creates ResponsivePanel
    // initialization options - validated in typescript
    // jqwidgets.ResponsivePanelOptions has generated TS definition
    var options = {
        width: '30%',
        height: '100%',
        collapseBreakpoint: 700,
        animationType: 'none',
        autoClose: false,
        toggleButton: toggleResponsivePanel
    };
    // creates an instance
    var myResponsivePanel = jqwidgets.createInstance(selector, 'jqxResponsivePanel', options);
    myResponsivePanel.addEventHandler('open expand close collapse', function (event) {
        if (event.args.element)
            return;
        var collapsed = myResponsivePanel.isCollapsed();
        var opened = myResponsivePanel.isOpened();
        if (collapsed && !opened) {
            contentOptions.width = '100%';
            content.setOptions(contentOptions);
        }
        else if (collapsed && opened) {
            contentOptions.width = '65%';
            content.setOptions(contentOptions);
        }
        else if (!collapsed) {
            contentOptions.width = '65%';
            content.setOptions(contentOptions);
        }
    });
    contentOptions.width = '65%';
    contentOptions.height = '100%';
    content.setOptions(contentOptions);
    // Create Buttons
    var buttonSmallOptions = {};
    var buttonSmall = jqwidgets.createInstance(resizeSmall, 'jqxButton', buttonSmallOptions);
    var buttonBigOptions = {};
    var buttonBig = jqwidgets.createInstance(resizeBig, 'jqxButton', buttonSmallOptions);
    var ownerPanel = document.getElementById(ownerPanelId);
    buttonSmall.addEventHandler('click', function () {
        ownerPanel.style.width = '500px';
        contentOptions.width = '100%';
        content.setOptions(contentOptions);
        myResponsivePanel.refresh();
        buttonSmall.setOptions({ disabled: true });
        buttonBig.setOptions({ disabled: false });
    });
    buttonBig.addEventHandler('click', function () {
        ownerPanel.style.width = '800px';
        contentOptions.width = '100%';
        content.setOptions(contentOptions);
        myResponsivePanel.refresh();
        buttonSmall.setOptions({ disabled: false });
        buttonBig.setOptions({ disabled: true });
    });
}
//# sourceMappingURL=typescript-responsivepanel.js.map