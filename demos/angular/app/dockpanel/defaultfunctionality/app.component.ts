 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxdockpanel';

@Component({
    selector: 'my-app',
    templateUrl: `../app/dockpanel/defaultfunctionality/app.component.htm`,
    styles: [`
        .jqx-layout-group-auto-hide-content-vertical
        {
            width: 200px;
        }
        .panel
        { 
           color: white
        } 
        .panel2
        {
            width: 20px;
            height: 20px;
        }
    `]
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('DockPanel1') myDockPanel1: jqxDockPanelComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {     
            this.addEventListeners();
        })
    }

    addEventListeners(): void
    {
        let dockPanels = document.getElementsByTagName('angularDockPanel');   

        let LayoutElement = document.getElementById('layout');
        let firstElement = document.getElementById('first');
        let secondElement = document.getElementById('second');
        let thirdElement = document.getElementById('third');
        let fourthElement = document.getElementById('fourth');

        LayoutElement.addEventListener('click', (event: any) =>
        {
            let position = parseInt(event.clientX) - parseInt(event.target.offsetLeft);
            for (let i = 0; i < 4; i++)
            {
                (<HTMLElement>(<HTMLElement>(<HTMLElement>(<HTMLElement>dockPanels[0]).children[0]).children[0]).children[i]).style.width = 'auto';
                (<HTMLElement>(<HTMLElement>(<HTMLElement>(<HTMLElement>dockPanels[0]).children[0]).children[0]).children[i]).style.height = 'auto';
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
                        (<HTMLElement>(<HTMLElement>(<HTMLElement>(<HTMLElement>dockPanels[0]).children[0]).children[0]).children[i]).style.width = '100px';
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
                        (<HTMLElement>(<HTMLElement>(<HTMLElement>(<HTMLElement>dockPanels[0]).children[0]).children[0]).children[i]).style.width = '150px';
                    }
                    firstElement.setAttribute('dock', 'left');
                    secondElement.setAttribute('dock', 'left');
                    thirdElement.setAttribute('dock', 'left');
                    fourthElement.setAttribute('dock', 'left');

                } else if (position < 235)
                {
                    for (let i = 0; i < 4; i++)
                    {
                        (<HTMLElement>(<HTMLElement>(<HTMLElement>(<HTMLElement>dockPanels[0]).children[0]).children[0]).children[i]).style.height = '70px';
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
                        (<HTMLElement>(<HTMLElement>(<HTMLElement>(<HTMLElement>dockPanels[0]).children[0]).children[0]).children[i]).style.width = '100px';
                    }
                    firstElement.setAttribute('dock', 'left');
                    secondElement.setAttribute('dock', 'left');
                    thirdElement.setAttribute('dock', 'left');
                    fourthElement.setAttribute('dock', 'left');
                }
            this.myDockPanel1.refresh();
        }, true);
    }
}
