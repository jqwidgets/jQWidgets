import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { jqxSplitLayoutComponent } from 'jqwidgets-ng/jqxsplitlayout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [`
		.jqx-split-layout-component {
			width: 100%;
			height: 100%;
		}

		.jqx-list-box,
		.jqx-tree {
			border: 0;
			width: 100%;
			height: 100%;
			outline: none;
		}
	`]
})

export class AppComponent implements AfterViewInit  {
    @ViewChild('myLayout', { static: false }) myLayout: jqxSplitLayoutComponent;
	
	 dataSource = [
			{
				content: `<div id="tree"></div>`,
				size: 250
			},
			{
				orientation: "horizontal",
				items: [
					{
						type: "tabs",
						modifiers: ["resize"],
						items: [
							{
								label: "Paragraph 1",
								content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, magna ornare congue ultricies, nunc velit placerat orci, vitae finibus ipsum nunc eu felis. Proin sodales est ut turpis egestas, id vestibulum libero accumsan. Nam sed dui purus. Mauris laoreet dignissim arcu, sed finibus ipsum imperdiet nec. Sed varius aliquam condimentum. Duis ex enim, rhoncus eget rutrum a, ultricies vel nisi. Nunc eu quam fringilla, cursus sem eu, posuere nisl. Phasellus vel fringilla leo. Cras at sodales velit. Morbi vitae dignissim velit. Suspendisse risus lorem, lacinia quis pharetra vel, consequat vitae tortor. Nullam et urna tortor. Curabitur sodales velit dui, nec vestibulum augue tempor eu. Aliquam nec nibh eu risus ultrices blandit. Aenean pellentesque rhoncus lorem non vulputate.`
							},
							{
								label: "Paragraph 2",
								content: `Suspendisse euismod odio ac maximus luctus. In non cursus magna, eu dignissim magna. Vestibulum molestie eget tellus quis facilisis. Maecenas ultricies feugiat turpis, non aliquam magna consequat a. Nullam aliquet, augue a tempor aliquam, nulla dui pulvinar lorem, sed vehicula metus magna eu ligula. Duis tempor, dui tempus laoreet tempor, urna massa elementum metus, lobortis hendrerit libero nibh at sem. Nulla viverra enim tortor, id faucibus neque vehicula at. Vivamus non eros vel dui viverra lobortis vitae ut enim. In sit amet tortor nisi. Fusce varius velit eget dictum tempor. Cras dignissim volutpat sollicitudin. Morbi pulvinar dictum quam nec aliquet. Pellentesque sed tellus dui. Proin at lorem nec nisl bibendum scelerisque. Morbi commodo eget est nec imperdiet.`
							}
						]
					}, {
						content: `<div id="listbox"></div>`,
					}
				]
			}
		]
		
	   treeSource = [
			{
				icon: "https://www.jqwidgets.com/angular/images/mailIcon.png", label: "Mail", expanded: true, items: [
					{ icon: "https://www.jqwidgets.com/angular/images/calendarIcon.png", label: "Calendar" },
					{ icon: "https://www.jqwidgets.com/angular/images/contactsIcon.png", label: "Contacts", selected: true }
				]
			},
			{
				icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Inbox", expanded: true, items: [
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Admin" },
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Corporate" },
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Finance" },
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Other" }
				]
			},
			{ icon: "https://www.jqwidgets.com/angular/images/recycle.png", label: "Deleted Items" },
			{ icon: "https://www.jqwidgets.com/angular/images/notesIcon.png", label: "Notes" },
			{ iconsize: 14, icon: "https://www.jqwidgets.com/angular/images/settings.png", label: "Settings" },
			{ icon: "https://www.jqwidgets.com/angular/images/favorites.png", label: "Favorites" }
		];
		
	 setup(): void {
		const that = this;
				
		jqwidgets.createInstance(`#tree`, 'jqxTree', {
			source: that.treeSource, width: '100%', height: '100%'
		});
		
		jqwidgets.createInstance(`#listbox`, 'jqxListBox', {
			source: that.treeSource, width: '100%', height: '100%'
		});
	 }
	 
	 ngAfterViewInit(): void {
		const that = this;
		
		if (document.readyState === "complete") {
			that.setup();
		}
		else {
			window.onload = function() {
				that.setup();
			}
		}
     }
}
