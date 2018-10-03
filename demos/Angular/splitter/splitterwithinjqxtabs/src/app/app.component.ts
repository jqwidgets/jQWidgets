import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('splitter1') splitter1: ElementRef;
    @ViewChild('splitter2') splitter2: ElementRef;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    initTabContent = (tab: number): void => {
        if (tab == 0) {
            let jqxSplitter1: jqwidgets.jqxSplitter = jqwidgets.createInstance(this.splitter1.nativeElement, 'jqxSplitter', {
                theme: 'material', 
                height: '100%',
                width: '100%',
                panels: [{ size: '50%' }]
            });
        }
        else {
            let jqxSplitter2: jqwidgets.jqxSplitter = jqwidgets.createInstance(this.splitter2.nativeElement, 'jqxSplitter', {
                theme: 'material', 
                orientation: 'horizontal',
                height: '100%',
                width: '100%',
                panels: [{ size: '50%' }]
            });
        }
    }
}