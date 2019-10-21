import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('splitter1', { static: false }) splitter1: ElementRef;
    @ViewChild('splitter2', { static: false }) splitter2: ElementRef;

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    initTabContent = (tab: number): void => {
        if (tab === 0 && this.splitter1) {
            jqwidgets.createInstance(this.splitter1.nativeElement, 'jqxSplitter', {
                height: '100%',
                width: '100%',
                panels: [{ size: '50%' }]
            });
        } else if (tab === 1 && this.splitter2) {
            jqwidgets.createInstance(this.splitter2.nativeElement, 'jqxSplitter', {
                orientation: 'horizontal',
                height: '100%',
                width: '100%',
                panels: [{ size: '50%' }]
            });
        }
    }
}