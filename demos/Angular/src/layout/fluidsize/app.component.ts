import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	
	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}
	
    layout: any[] =
    [{
        type: 'layoutGroup',
        orientation: 'horizontal',
        items: [{
            type: 'layoutGroup',
            orientation: 'vertical',
            width: '60%',
            items: [{
                type: 'documentGroup',
                height: '50%',
                minHeight: '25%',
                items: [{
                    type: 'documentPanel',
                    title: 'Document 1',
                    contentContainer: 'Document1Panel'
                }, {
                    type: 'documentPanel',
                    title: 'Document 2',
                    contentContainer: 'Document2Panel'
                }]
            }, {
                type: 'tabbedGroup',
                height: '50%',
                pinnedHeight: '10%',
                items: [{
                    type: 'layoutPanel',
                    title: 'Error List',
                    contentContainer: 'ErrorListPanel'
                }, {
                    type: 'layoutPanel',
                    title: 'Output',
                    contentContainer: 'OutputPanel',
                    selected: true
                }]
            }]
        }, {
            type: 'tabbedGroup',
            width: '40%',
            items: [{
                type: 'layoutPanel',
                title: 'Solution Explorer',
                contentContainer: 'SolutionExplorerPanel'
            }, {
                type: 'layoutPanel',
                title: 'Properties',
                contentContainer: 'PropertiesPanel'
            }]
        }]
    }];
}