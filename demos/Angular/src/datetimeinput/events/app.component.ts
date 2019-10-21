import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    ngAfterViewInit(): void {
        this.myPanel.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    onValueChanged(event: any): void {
        this.myPanel.clearcontent();
        let date = event.args.date;
        this.myPanel.prepend('<div style="margin-top: 5px;">New Value: ' + date + '</div>');
    }

    onOpen(): void {
        this.myPanel.prepend('<div style="margin-top: 5px;">Popup Opened</div>');
    }

    onClose(): void {
        this.myPanel.prepend('<div style="margin-top: 5px;">Popup Closed</div>');
    }
}