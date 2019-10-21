import { Component, ViewChild } from '@angular/core';

import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myEditor', { static: false }) myEditor: jqxEditorComponent;

    tools: string = 'bold italic underline | format font size | left center right | print';

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    createCommand = (name: string): any => {
        switch (name) {
            case 'print':
                return {
                    type: 'button',
                    tooltip: 'Print',
                    init: (widget: any): void => {
                        widget.jqxButton({ height: 25, width: 40 });
                        widget.html('<span style="line-height: 23px;">Print</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                        // do something here when the selection is changed.
                    },
                    action: (widget: any, style: any): void => {
                        // return nothing and perform a custom action.
                        this.myEditor.print();
                    }
                }
        }
    };
}