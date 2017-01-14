/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDockPanel(DockPanel1Selector, DockPanel2Selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.DockPanelOptions has generated TS definition
    let DockPanel1Options: jqwidgets.DockPanelOptions =
    {
        width: 300, height: 210
    };
    let DockPanel2Options: jqwidgets.DockPanelOptions =
    {
        width: 300, height: 210, lastchildfill: false
    };

    // creates an instance
    let myDockPanel1: jqwidgets.jqxDockPanel = jqwidgets.createInstance(DockPanel1Selector, 'jqxDockPanel', DockPanel1Options);  
    let myDockPanel2: jqwidgets.jqxDockPanel = jqwidgets.createInstance(DockPanel2Selector, 'jqxDockPanel', DockPanel2Options);

    // Apply custom layout depending on the user's choice.

    let DockPanel1Element = document.getElementById('jqxDockPanel');
    let DockPanel2Element = document.getElementById('jqxDockPanel2');
    let LayoutElement = document.getElementById('layout');
    let firstElement = document.getElementById('first');
    let secondElement = document.getElementById('second');
    let thirdElement = document.getElementById('third');
    let fourthElement = document.getElementById('fourth');

    (<HTMLElement>DockPanel1Element.children[0]).style.color = '#fff';
    (<HTMLElement>DockPanel2Element.children[0]).style.color = '#fff';

   

    LayoutElement.addEventListener('click', function (event:any)
    {
        let position = parseInt(event.clientX) - parseInt(event.target.offsetLeft);

        for (let i = 0; i < 4; i++)
        {
            (<HTMLElement>(<HTMLElement>DockPanel1Element.children[0]).children[i]).style.width = 'auto';
            (<HTMLElement>(<HTMLElement>DockPanel1Element.children[0]).children[i]).style.height = 'auto';
        }
        
        if (position < 55)
        {
            firstElement.setAttribute('dock', 'bottom');
            firstElement.style.height = '105px';
            secondElement.setAttribute('dock', 'left');
            secondElement.style.width = '100px';
            thirdElement.setAttribute('dock', 'left');
            thirdElement.style.width = '100px';
            fourthElement.setAttribute('dock', 'left');
            fourthElement.style.width = '100px';
        } else
            if (position < 115)
            {
                for (let i = 0; i < 4; i++)
                {
                    (<HTMLElement>(<HTMLElement>DockPanel1Element.children[0]).children[i]).style.width = '100px';
                }
                firstElement.setAttribute('dock', 'left');
                secondElement.setAttribute('dock', 'right');
                thirdElement.setAttribute('dock', 'bottom');
                thirdElement.style.height = '140px';
                fourthElement.setAttribute('dock', 'top');
                fourthElement.style.height = '70px';
            } else if (position < 175)
            {
                for (let i = 0; i < 4; i++)
                {
                    (<HTMLElement>(<HTMLElement>DockPanel1Element.children[0]).children[i]).style.width = '150px';
                }
                firstElement.setAttribute('dock', 'left');
                secondElement.setAttribute('dock', 'left');
                thirdElement.setAttribute('dock', 'left');
                fourthElement.setAttribute('dock', 'left');
                
            } else if (position < 235)
            {
                for (let i = 0; i < 4; i++)
                {
                    (<HTMLElement>(<HTMLElement>DockPanel1Element.children[0]).children[i]).style.height = '70px';
                }
                firstElement.setAttribute('dock', 'top');
                secondElement.setAttribute('dock', 'top');
                thirdElement.setAttribute('dock', 'top');
                fourthElement.setAttribute('dock', 'top');
            }
            else
            {
                for (let i = 0; i < 4; i++)
                {
                    (<HTMLElement>(<HTMLElement>DockPanel1Element.children[0]).children[i]).style.width = '100px';
                }
                firstElement.setAttribute('dock', 'left');
                secondElement.setAttribute('dock', 'left');
                thirdElement.setAttribute('dock', 'left');
                fourthElement.setAttribute('dock', 'left');
            }
        myDockPanel1.refresh();
    }, true)




}