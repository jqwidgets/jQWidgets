import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxSplitLayoutComponent } from 'jqwidgets-ng/jqxsplitlayout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None

})

export class AppComponent {
    @ViewChild('myLayout', { static: false }) myLayout: jqxSplitLayoutComponent;
	
	 dataSource = [
		{
			label: "Tab 1",
			modifiers: [],
			content: "Item 1"
		},
		{
			label: "Tab 2",
			content: "Item 2"
		},
		{
			orientation: "horizontal",
			items: [
				{
					items: [
						{
							label: "Tab 3",
							content: "Item 3"
						}
					]
				},
				{
					items: [
						{
							label: "Tab 4",
							content: "Item 4"
						}
					]
				}
			]
		}
	]
}
