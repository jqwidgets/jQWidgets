import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('splitter1') splitter1: ElementRef;
    @ViewChild('splitter2') splitter2: ElementRef;

    initTabContent = (tab: number): void => {
        if (tab == 0) {
            let jqxSplitter1: jqwidgets.jqxSplitter = jqwidgets.createInstance(this.splitter1.nativeElement, 'jqxSplitter', {
                height: '100%',
                width: '100%',
                panels: [{ size: '50%' }]
            });
        }
        else {
            let jqxSplitter2: jqwidgets.jqxSplitter = jqwidgets.createInstance(this.splitter2.nativeElement, 'jqxSplitter', {
                orientation: 'horizontal',
                height: '100%',
                width: '100%',
                panels: [{ size: '50%' }]
            });
        }
    }
}