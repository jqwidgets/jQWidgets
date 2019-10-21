import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;
    @ViewChild('ContentPanel', { static: false }) ContentPanel: ElementRef;

	getWidth() : any {
		if (document.body.offsetWidth < 650) {
			return '90%';
		}
		
		return 650;
	}

	
    ngAfterViewInit() {
        this.myTree.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    select(event: any): void {
        this.ContentPanel.nativeElement.innerHTML = "<div style='margin: 10px;'>" + event.args.element.id + "</div>";
    }
}