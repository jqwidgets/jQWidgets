import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { jqxTreeComponent } from '../../../jqwidgets-ts/angular_jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {        
    @ViewChild('jqxTree') jqxTree: jqxTreeComponent;
    @ViewChild('ContentPanel') ContentPanel: ElementRef;

    ngAfterViewInit() {
        this.jqxTree.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    select(event: any): void {
        this.ContentPanel.nativeElement.innerHTML = '<div style="margin: 10px;">' + event.args.element.id + '</div>';
    }; 
}