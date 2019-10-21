import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxResponsivePanelComponent } from 'jqwidgets-ng/jqxresponsivepanel';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myResponsivePanel', { static: false }) myResponsivePanel: jqxResponsivePanelComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;
    @ViewChild('container', { static: false }) container: ElementRef;
    @ViewChild('toggleResponsivePanel', { static: false }) toggleResponsivePanel: ElementRef;

    flag: boolean = true;

    responsivePanelEventsHandler(event: any): void {
        if (event.args.element) {
            return;
        }

        if (this.myResponsivePanel) {
            let collapsed = this.myResponsivePanel.isCollapsed();
            let opened = this.myResponsivePanel.isOpened();
    
            if (this.flag) {
                collapsed = false;
                opened = false;
            }
            this.flag = false;
    
            if (!collapsed && !opened) {
                this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
                this.toggleResponsivePanel.nativeElement.style.display = 'none';
            }
            else if (collapsed && opened) {
                this.myPanel.width('65%');
            }
            else if (collapsed && !opened) {
                this.myPanel.width('100%');
                this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'none';
                this.toggleResponsivePanel.nativeElement.style.display = 'block';
            }
            else if (!collapsed && opened) {
                this.myPanel.width('65%');
                this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
                this.toggleResponsivePanel.nativeElement.style.display = 'block';
            }
        }
    }

    resizeSmallBtnOnClick(): void {
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'none';
        this.toggleResponsivePanel.nativeElement.style.display = 'block';
        this.container.nativeElement.style.width = '500px';
        this.myPanel.width('100%');
    };

    resizeBigBtnOnClick(): void {
        this.myPanel.width('100%');
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
        this.toggleResponsivePanel.nativeElement.style.display = 'none';
        this.container.nativeElement.style.width = '800px';
        this.myPanel.width('65%');
    };
}