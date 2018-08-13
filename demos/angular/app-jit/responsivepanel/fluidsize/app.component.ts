import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxResponsivePanelComponent } from '../../../jqwidgets-ts/angular_jqxresponsivepanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myResponsivePanel') myResponsivePanel: jqxResponsivePanelComponent;

    responsivePanelOnCollapse(event: any): void {
        if (event.args.element)
            return;
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
    }
}