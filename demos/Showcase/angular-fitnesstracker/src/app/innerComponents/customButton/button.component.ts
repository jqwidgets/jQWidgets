import { Component, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';

@Component({
	selector: 'cbutton',
	templateUrl: './button.component.html'
})

export class CustomButtonComponent {
	@ViewChild('referenceButton') button: jqxButtonComponent;
	
	@Output() clickEvent = new EventEmitter();
				
	customClickEvent(): void {
		this.clickEvent.emit();
	};
	
	public disabled(state: boolean): void {
		this.button.disabled(state);
	};
}