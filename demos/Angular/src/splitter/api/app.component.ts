import { Component, ViewChild } from '@angular/core';

import { jqxSplitterComponent } from 'jqwidgets-ng/jqxsplitter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxSplitter', { static: false }) mainSplitter: jqxSplitterComponent;

    panels: any[] = [{ size: 250 }];
   	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	} 
    orientationButtonClick(): void {
        let currentOrientation = this.mainSplitter.orientation();
        if (currentOrientation === 'vertical') {
            this.mainSplitter.orientation('horizontal');
        } else {
            this.mainSplitter.orientation('vertical');
        }
    };

    expandFirstButtonClick(): void {
        let panels = this.mainSplitter.panels();
        panels[0].collapsible = true;
        panels[1].collapsible = false;
        this.mainSplitter.panels(panels);
        this.mainSplitter.expand();
    };

    expandLastButtonClick(): void {
        let panels = this.mainSplitter.panels();
        panels[0].collapsible = false;
        panels[1].collapsible = true;
        this.mainSplitter.panels(panels);
        this.mainSplitter.expand();
    };

    collapseFirstButtonClick(): void {
        let panels = this.mainSplitter.panels();
        panels[0].collapsible = true;
        panels[1].collapsible = false;
        this.mainSplitter.panels(panels);
        this.mainSplitter.collapse();
    };

    collapseLastButtonClick(): void {
        let panels = this.mainSplitter.panels();
        panels[0].collapsible = false;
        panels[1].collapsible = true;
        this.mainSplitter.panels(panels);
        this.mainSplitter.collapse();
    };

    enableButtonClick(): void {
        this.mainSplitter.enable();
    };

    disableButtonClick(): void {
        this.mainSplitter.disable();
    };
}