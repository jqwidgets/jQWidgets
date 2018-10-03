import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
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
                        let source =
                            [
                                { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
                                { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
                                { label: 'Courier New', value: '"Courier New", Courier, monospace' },
                                { label: 'Georgia', value: 'Georgia,serif' },
                                { label: 'Helvetica', value: 'HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica' },
                                { label: 'Impact', value: 'Impact,Charcoal,sans-serif' },
                                { label: 'Lucida Console', value: '"Lucida Console",Monaco,monospace' },
                                { label: 'Tahoma', value: 'Tahoma,Geneva,sans-serif' },
                                { label: 'Times New Roman', value: '"Times New Roman",Times,serif' },
                                { label: 'Trebuchet MS', value: '"Trebuchet MS",Helvetica,sans-serif' },
                                { label: 'Verdana', value: 'Verdana,Geneva,sans-serif' }
                            ];
                        widget.jqxDropDownList({
                            source: source
                        });
                    }
                }
        }
    };
}