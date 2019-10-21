import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxTabs', { static: false }) jqxTabs: jqxTabsComponent;
    @ViewChild('unorderedList', { static: false }) unorderedList: ElementRef;

    index: number = 0;
	
	getWidth() : any {
		if (document.body.offsetWidth < 500) {
			return '90%';
		}
		
		return 500;
	}

    tabclick(event: any): void {
        if (event.args.item == this.unorderedList.nativeElement.children.length - 1) {
            let length = this.unorderedList.nativeElement.children.length;
            this.jqxTabs.addAt(event.args.item, 'Sample title ' + this.index, 'Sample content number: ' + this.index);
            this.index++;
        }
    };
}