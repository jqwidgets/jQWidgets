import { Component, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';

import { jqxSortableComponent } from 'jqwidgets-ng/jqxsortable';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('sortable', { static: false }) sortable: jqxSortableComponent;
    @ViewChild('eventsContainer', { static: false }) eventsContainer: jqxPanelComponent;

    ngAfterViewInit() {
        this.loadInfo();
    }

    loadInfo(): void {
        let firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven"];
        let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan"];
        let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager"];
        for (let i = 0; i < firstNames.length; i++) {
            let element = document.createElement('div');
            let imgurl = './../../../images/' + firstNames[i].toLowerCase() + '.png';
            let img = '<img height="50" width="40" src="' + imgurl + '"/>';
            element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            this.sortable.elementRef.nativeElement.firstElementChild.appendChild(element);
        }
    };

    eventLog(event: any): void {
        this.eventsContainer.prepend('<div style="margin-top: 5px;">' + event.type + '</div>');
    };

    activate(event: any): void {
        this.eventLog(event);
    };

    beforeStop(event: any): void {
        this.eventLog(event);
    };

    change(event: any): void {
        this.eventLog(event);
    };

    deactivate(event: any): void {
        this.eventLog(event);
    };

    out(event: any): void {
        this.eventLog(event);
    };

    over(event: any): void {
        this.eventLog(event);
    };

    receive(event: any): void {
        this.eventLog(event);
    };

    remove (event: any): void {
        this.eventLog(event);
    };

    start (event: any): void {
        this.eventLog(event);
    };

    stop (event: any): void {
        this.eventLog(event);
    };

    update(event: any): void {
        this.eventLog(event);
    };

    create(event: any): void {
        this.eventLog(event);
    };
}