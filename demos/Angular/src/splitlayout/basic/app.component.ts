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
			content: "Item 1"
		},
		{
			content: "Item 2"
		},
		{
			orientation: "horizontal",
			items: [
				{
					content: "Item 3"
				},
				{
					content: "Item 4"
				}
			]
		}
	]
}
