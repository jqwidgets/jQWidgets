/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDragDrop(DragDropSelector, PanelSelector)
{
    // initialization options - validated in typescript
    // jqwidgets.DragDroplOptions has generated TS definition
    let dragDropOptions: jqwidgets.DragDropOptions =
        {
            restricter: 'parent', dropTarget: '.drop-target'
        };
    let panelOptions: jqwidgets.PanelOptions =
        {
            width: 260, height: 330
        };

    // creates an instance
    let myDragDrop: jqwidgets.jqxDragDrop = jqwidgets.createInstance(DragDropSelector, 'jqxDragDrop', dragDropOptions);
    let myPanel: jqwidgets.jqxPanel = jqwidgets.createInstance(PanelSelector, 'jqxPanel', panelOptions);

    myDragDrop.addEventHandler('dragStart', function (event)
    {
        addEvent(event.type, event.args.position);
    });
    myDragDrop.addEventHandler('dragEnd', function (event)
    {
        addEvent(event.type, event.args.position);
    });
    myDragDrop.addEventHandler('dropTargetEnter', function (event)
    {
        addEvent(event.type, event.args.position);
    });
    myDragDrop.addEventHandler('dropTargetLeave', function (event)
    {
        addEvent(event.type, event.args.position);
    });

    function addEvent(type, position)
    {   
        position.left = position.left.toString().match(/([^.]+)/);
        position.top = position.top.toString().match(/([^.]+)/);
        position.left[0] === '-0' ? position.left[0] = 0 : position.left[0] = position.left[0];
        position.top[0] === '-0' ? position.top[0] = 0 : position.top[0] = position.top[0];
        myPanel.prepend('<div class="row">Event: ' + type + ', (' + position.left[0] + ', ' + position.top[0] + ')</div>');
    }

    (function centerLabels()
    {
        let labels = document.getElementsByClassName('label');
        for (let i = 0; i < labels.length; i++)
        {
            let parentHeight = labels[i].parentElement.offsetHeight;
            let elementheight = labels[i].clientHeight;
            let top = (parentHeight - elementheight) / 2;
            (<HTMLElement>labels[i]).style.top = top + 'px';
        }
    } ());
    
}