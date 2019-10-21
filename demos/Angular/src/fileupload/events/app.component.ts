import { Component, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    onSelect(event: any): void {
        let args = event.args;
        let fileName = args.file;
        let fileSize = args.size;
        this.myPanel.append('<strong>' + event.type + ':</strong> ' +
            fileName + ';<br />' + 'size: ' + fileSize + '<br />');
    };

    onRemove(event: any): void {
        let fileName = event.args.file;
        this.myPanel.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
    };

    onUploadStart(event: any): void {
        let fileName = event.args.file;
        this.myPanel.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
    };

    onUploadEnd(event: any): void {
        let args = event.args;
        let fileName = args.file;
        let serverResponce = args.response;
        this.myPanel.append('<strong>' + event.type + ':</strong> ' +
            fileName + ';<br />' + 'server response: ' + serverResponce + '<br />');
    };
}