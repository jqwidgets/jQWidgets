/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDragDrop(DragDropSelector, PanelSelector) {
    // initialization options - validated in typescript
    // jqwidgets.DragDroplOptions has generated TS definition
    var dragDropOptions = {
        restricter: 'parent', dropTarget: '.drop-target'
    };
    var panelOptions = {
        width: 260, height: 330
    };
    // creates an instance
    var myDragDrop = jqwidgets.createInstance(DragDropSelector, 'jqxDragDrop', dragDropOptions);
    var myPanel = jqwidgets.createInstance(PanelSelector, 'jqxPanel', panelOptions);
    myDragDrop.addEventHandler('dragStart', function (event) {
        addEvent(event.type, event.args.position);
    });
    myDragDrop.addEventHandler('dragEnd', function (event) {
        addEvent(event.type, event.args.position);
    });
    myDragDrop.addEventHandler('dropTargetEnter', function (event) {
        addEvent(event.type, event.args.position);
    });
    myDragDrop.addEventHandler('dropTargetLeave', function (event) {
        addEvent(event.type, event.args.position);
    });
    function addEvent(type, position) {
        position.left = position.left.toString().match(/([^.]+)/);
        position.top = position.top.toString().match(/([^.]+)/);
        position.left[0] === '-0' ? position.left[0] = 0 : position.left[0] = position.left[0];
        position.top[0] === '-0' ? position.top[0] = 0 : position.top[0] = position.top[0];
        myPanel.prepend('<div class="row">Event: ' + type + ', (' + position.left[0] + ', ' + position.top[0] + ')</div>');
    }
    (function centerLabels() {
        var labels = document.getElementsByClassName('label');
        for (var i = 0; i < labels.length; i++) {
            var parentHeight = labels[i].parentElement.offsetHeight;
            var elementheight = labels[i].clientHeight;
            var top_1 = (parentHeight - elementheight) / 2;
            labels[i].style.top = top_1 + 'px';
        }
    }());
}
//# sourceMappingURL=typescript-dragdrop.js.map