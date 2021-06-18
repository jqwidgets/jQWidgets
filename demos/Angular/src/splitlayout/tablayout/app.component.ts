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
			type: "tabs",
			label: "Tab 1",
			content: "Item 1"
		},
		{
			type: "tabs",
			label: "Tab 2",
			content: "Item 2"
		},
		{
			orientation: "horizontal",
			items: [
				{
					type: "tabs",
					items: [
						{
							label: "Tab 3",
							content: "Item 3"
						}
					]
				},
				{
					type: "tabs",
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
