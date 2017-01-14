/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDockPanel(DockPanel1Selector, DockPanel2Selector) {
    // initialization options - validated in typescript
    // jqwidgets.DockPanelOptions has generated TS definition
    var DockPanel1Options = {
        width: 300, height: 210
    };
    var DockPanel2Options = {
        width: 300, height: 210, lastchildfill: false
    };
    // creates an instance
    var myDockPanel1 = jqwidgets.createInstance(DockPanel1Selector, 'jqxDockPanel', DockPanel1Options);
    var myDockPanel2 = jqwidgets.createInstance(DockPanel2Selector, 'jqxDockPanel', DockPanel2Options);
    // Apply custom layout depending on the user's choice.
    var DockPanel1Element = document.getElementById('jqxDockPanel');
    var DockPanel2Element = document.getElementById('jqxDockPanel2');
    var LayoutElement = document.getElementById('layout');
    var firstElement = document.getElementById('first');
    var secondElement = document.getElementById('second');
    var thirdElement = document.getElementById('third');
    var fourthElement = document.getElementById('fourth');
    DockPanel1Element.children[0].style.color = '#fff';
    DockPanel2Element.children[0].style.color = '#fff';
    LayoutElement.addEventListener('click', function (event) {
        var position = parseInt(event.clientX) - parseInt(event.target.offsetLeft);
        for (var i = 0; i < 4; i++) {
            DockPanel1Element.children[0].children[i].style.width = 'auto';
            DockPanel1Element.children[0].children[i].style.height = 'auto';
        }
        if (position < 55) {
            firstElement.setAttribute('dock', 'bottom');
            firstElement.style.height = '105px';
            secondElement.setAttribute('dock', 'left');
            secondElement.style.width = '100px';
            thirdElement.setAttribute('dock', 'left');
            thirdElement.style.width = '100px';
            fourthElement.setAttribute('dock', 'left');
            fourthElement.style.width = '100px';
        }
        else if (position < 115) {
            for (var i = 0; i < 4; i++) {
                DockPanel1Element.children[0].children[i].style.width = '100px';
            }
            firstElement.setAttribute('dock', 'left');
            secondElement.setAttribute('dock', 'right');
            thirdElement.setAttribute('dock', 'bottom');
            thirdElement.style.height = '140px';
            fourthElement.setAttribute('dock', 'top');
            fourthElement.style.height = '70px';
        }
        else if (position < 175) {
            for (var i = 0; i < 4; i++) {
                DockPanel1Element.children[0].children[i].style.width = '150px';
            }
            firstElement.setAttribute('dock', 'left');
            secondElement.setAttribute('dock', 'left');
            thirdElement.setAttribute('dock', 'left');
            fourthElement.setAttribute('dock', 'left');
        }
        else if (position < 235) {
            for (var i = 0; i < 4; i++) {
                DockPanel1Element.children[0].children[i].style.height = '70px';
            }
            firstElement.setAttribute('dock', 'top');
            secondElement.setAttribute('dock', 'top');
            thirdElement.setAttribute('dock', 'top');
            fourthElement.setAttribute('dock', 'top');
        }
        else {
            for (var i = 0; i < 4; i++) {
                DockPanel1Element.children[0].children[i].style.width = '100px';
            }
            firstElement.setAttribute('dock', 'left');
            secondElement.setAttribute('dock', 'left');
            thirdElement.setAttribute('dock', 'left');
            fourthElement.setAttribute('dock', 'left');
        }
        myDockPanel1.refresh();
    }, true);
}
//# sourceMappingURL=typescript-dockpanel.js.map