import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    tools: string = 'bold italic underline | font size | left center right | outdent indent';

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    createCommand = (name: string): any => {
        switch (name) {
            case 'font':
                return {
                    init: (widget: any): void => {
                        widget.jqxDropDownList({
                            source: [
                                { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
                                { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
                                { label: 'Courier New', value: '"Courier New", Courier, monospace' },
                                { label: 'Georgia', value: 'Georgia,serif' }]
                        });
                    }
                }
            case 'size':
                return {
                    init: (widget: any): void => {
                        widget.jqxDropDownList({
                            source: [
                                { label: '8pt', value: 'xx-small' },
                                { label: '12pt', value: 'small' },
                                { label: '18pt', value: 'large' },
                                { label: '36pt', value: 'xx-large' }
                            ]
                        });
                    }
                }
        }
    };
}