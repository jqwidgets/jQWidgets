 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDragDropComponent } from '../../../../../jqwidgets-ts/angular_jqxdragdrop';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';


@Component({
    selector: 'my-app',
    templateUrl: `../app/dragdrop/defaultfunctionality/app.component.htm`,
    styleUrls: [`../app/dragdrop/defaultfunctionality/app.component.css`]
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('panelReference') myPanel: jqxPanelComponent;

    ngAfterViewInit(): void 
    {
        setTimeout(() =>
        {
            let dragDropElement = document.getElementsByClassName('jqx-draggable')[0];
            let panelElement = document.getElementsByClassName('jqx-panel')[0];
            (<HTMLElement>dragDropElement).style.border = '1px solid #bbb';
            (<HTMLElement>dragDropElement).style.backgroundColor = '#C9ECFF';
            (<HTMLElement>dragDropElement).style.width = '100px';
            (<HTMLElement>dragDropElement).style.height = '100px';
            (<HTMLElement>dragDropElement).style.left = '30px';
            (<HTMLElement>dragDropElement).style.top = '50px';
            (<HTMLElement>dragDropElement).style.padding = '5px';
            (<HTMLElement>dragDropElement).style.zIndex = '2';
            (<HTMLElement>panelElement).style.cssFloat = 'right';
            (<HTMLElement>panelElement).style.padding = '10px';
            (<HTMLElement>panelElement).style.fontFamily = 'Tahoma';
            (<HTMLElement>panelElement).style.fontSize = '13px';

            this.centerLabels();
        });
    }

    centerLabels(): void
    {
        let labels = document.getElementsByClassName('label');
        for (let i = 0; i < labels.length; i++)
        {
            let parentHeight = labels[i].parentElement.offsetHeight;
            let elementheight = labels[i].clientHeight;
            let top = (parentHeight - elementheight) / 2;
            (<HTMLElement>labels[i]).style.top = top - 10 + 'px';
        }
    }

    onDragStart(event: any) : void
    {
        this.addEvent(event.type, event.args.position);
    }
    onDragEnd(event: any): void
    {
        this.addEvent(event.type, event.args.position);
    }
    onDropTargetEnter(event: any): void
    {
        this.addEvent(event.type, event.args.position);
    }
    onDropTargetLeave(event: any): void
    {
        this.addEvent(event.type, event.args.position);
    }

    addEvent(type: string, position: any): void
    {
        position.left = position.left.toString().match(/([^.]+)/);
        position.top = position.top.toString().match(/([^.]+)/);
        position.left[0] === '-0' ? position.left[0] = 0 : position.left[0] = position.left[0];
        position.top[0] === '-0' ? position.top[0] = 0 : position.top[0] = position.top[0];
        this.myPanel.prepend('<div class="row">Event: ' + type + ', (' + position.left[0] + ', ' + position.top[0] + ')</div>');
    }
}