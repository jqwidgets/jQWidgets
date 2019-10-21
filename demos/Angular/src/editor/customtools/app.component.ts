import { Component, ViewChild } from '@angular/core';

import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myEditor', { static: false }) myEditor: jqxEditorComponent;

    tools: string = 'datetime | print | clear | backcolor | font | bold italic underline';

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    createCommand = (name: string): any => {
        switch (name) {
            case 'datetime':
                return {
                    type: 'list',
                    tooltip: 'Insert Date/Time',
                    init: (widget: any): void => {
                        widget.jqxDropDownList({ placeHolder: 'Insert Custom HTML', width: 170, source: ['Insert Time', 'Insert Date'], autoDropDownHeight: true });
                    },
                    refresh: (widget: any, style: any): void => {
                        // do something here when the selection is changed.
                        widget.jqxDropDownList('clearSelection');
                    },
                    action: (widget: any, editor: any): any => {
                        let widgetValue = widget.val();
                        let date = new Date();
                        // return object with command and value members.
                        return { command: 'inserthtml', value: widgetValue == 'Insert Time' ? date.getHours() + ':' + date.getMinutes() : date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() };
                    }
                }
            case 'print':
                return {
                    type: 'button',
                    tooltip: 'Print',
                    init: (widget: any): void => {
                        widget.jqxButton({ height: 25, width: 40 });
                        widget.html('<span style="line-height: 24px;">Print</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                        // do something here when the selection is changed.
                    },
                    action: (widget: any, editor: any): void => {
                        // return nothing and perform a custom action.
                        this.myEditor.print();
                    }
                }
            case 'clear':
                return {
                    type: 'button',
                    tooltip: 'Clear',
                    init: (widget: any): void => {
                        widget.jqxButton({ height: 25, width: 40 });
                        widget.html('<span style="line-height: 24px;">Clear</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                        // do something here when the selection is changed.
                    },
                    action: (widget: any, editor: any): void => {
                        // return nothing and perform a custom action.
                        this.myEditor.val('')
                    }
                }
            case 'backcolor':
                return {
                    type: 'colorPicker',
                    tooltip: 'Background',
                    init: (widget: any): void => {
                        widget.jqxDropDownButton({ width: 170 });
                        widget.jqxDropDownButton('setContent', '<span style="line-height: 24px;">Choose Background</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                        // do something here when the selection is changed.
                    },
                    action: (widget: any, editor: any): void => {
                        // return nothing and perform a custom action.
                        let color = widget.val();
                        editor.css('background', color);
                    }
                }
        }
    };
}
