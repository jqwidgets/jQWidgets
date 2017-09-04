import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    restricter = { left: 8, top: 8, width: 247, height: 247 }

    ngAfterViewInit(): void {
        this.centerLabels();
    }

    centerLabels(): void {
        let labels = document.getElementsByClassName('label');
        for (let i = 0; i < labels.length; i++) {
            let parentHeight = labels[i].parentElement.offsetHeight;
            let elementheight = labels[i].clientHeight;
            let top = (parentHeight - elementheight) / 2;
            (<HTMLElement>labels[i]).style.top = top + 'px';
        }
    }

    addEvent(type: string, position: any): void {
        let left = position.left.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
        let top = position.top.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
        this.myPanel.prepend(`<div class="row">Event: ${type}, (${left}, ${top})</div>`);
    }

    onDragStart(event: any): void {
        this.addEvent(event.type, event.args.position);
    }

    onDragEnd(event: any): void {
        this.addEvent(event.type, event.args.position);
    }

    onDropTargetEnter(event: any): void {
        this.addEvent(event.type, event.args.position);
    }

    onDropTargetLeave(event: any): void {
        this.addEvent(event.type, event.args.position);
    }
}
