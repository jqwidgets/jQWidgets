import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxTreeComponent } from '../../../jqwidgets-ts/angular_jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myTree') myTree: jqxTreeComponent;
    @ViewChild('ContentPanel') ContentPanel: ElementRef;

    ngAfterViewInit() {
        this.myTree.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    select(event: any): void {
        this.ContentPanel.nativeElement.innerHTML = "<div style='margin: 10px;'>" + event.args.element.id + "</div>";
    }
}