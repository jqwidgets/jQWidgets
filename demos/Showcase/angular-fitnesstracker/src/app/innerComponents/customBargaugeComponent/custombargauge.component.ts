import { Component, ViewChild, AfterViewInit, ElementRef, ViewEncapsulation, Input, Directive, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
	selector: 'customBargauge',
	templateUrl: './custombargauge.component.html'
})

export class CustomBargaugeComponent implements AfterViewInit {
	@ViewChild('referenceBarGauge') barGauge: jqxBarGaugeComponent;
		
	@Input() values: number[];
	@Input() color: string;
	@Input() backgroundColor: string;
	@Input() title: string;
	@Input() subtitle: string;
	@Input() currentValue: number;
	@Input() maxValue: number = 0;
			
	pendingValue: number = this.pendingValue || this.maxValue;
	width: number | string = "100%";
	height: number | string = 400;
	min: number = 0;
	max: number = 100;
	useGradient: boolean = false;	
	colorSchemeName: string = 'innerScheme';
	customColorScheme: any = this.getColorScheme();
	relativeInnerRadius: number = 0.8;
    startAngle: number;
    endAngle: number;
	labels: any = { precision: 0, indent: 10 };
		
	ngAfterViewInit() {
		this.barGauge.max(this.maxValue);
		this.setTitle();		
		this.barGauge.setOptions({
			colorScheme: this.colorSchemeName,
			customColorScheme: this.getColorScheme()
		});
		this.barGauge.render();		
	}
	
	private getColorScheme(): any {
		return {
			name: this.colorSchemeName,
			colors: [this.color]
		};
	};	
	
	private setTitle(): void {
		this.barGauge.title({
			text: this.title + ' - ' + this.currentValue + '/' + this.maxValue,
			font: { size: 20 },
			verticalAlignment: 'bottom',
			margin: { top: 0, bottom: 5 },
			subtitle: {
				text: this.pendingValue + ' ' + this.subtitle,
				font: { size: 13 }
			}
		});
	};
	
	private updateValue(newValue): void {
		this.barGauge.val([newValue]);
	};
	
	public updateBarGaugeContent(value: number, maxValue?: number): void {
		this.currentValue = value;
		if(maxValue != undefined) {
			this.maxValue = maxValue;
		}
		
		this.pendingValue = this.maxValue - value;
		if(this.pendingValue <= 0) {
			// Ensure real value for 'pendingValue' variable
			this.pendingValue = 0;
		}
		
		this.setTitle();
		this.updateValue(value);
	};
	
	public refresh(): void {
		this.barGauge.refresh();
	};
}