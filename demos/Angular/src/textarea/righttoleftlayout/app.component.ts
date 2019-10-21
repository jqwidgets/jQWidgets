import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTextArea', { static: false }) myTextArea: jqxTextAreaComponent;

    ngAfterViewInit(): void {
        this.myTextArea.val(this.text);
    }

    text: string = 'jQWidgets is a comprehensive and innovative widget library built on top of the jQuery JavaScript Library. It empowers developers to deliver professional, cross-browser compatible web applications, while significantly minimizing their development time. jQWidgets contains more than 60 UI widgets and is one of the fastest growing JavaScript UI frameworks on the Web.';
}