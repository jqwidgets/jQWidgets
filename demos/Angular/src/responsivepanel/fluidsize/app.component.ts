import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxResponsivePanelComponent } from 'jqwidgets-ng/jqxresponsivepanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myResponsivePanel', { static: false }) myResponsivePanel: jqxResponsivePanelComponent;

    responsivePanelOnCollapse(event: any): void {
        if (event.args.element) {
            return;
        }

        if (this.myResponsivePanel) {
            this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
        }
    }
}