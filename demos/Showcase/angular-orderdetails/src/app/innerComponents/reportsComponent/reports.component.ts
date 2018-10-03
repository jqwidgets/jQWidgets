import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { jqxRadioButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxradiobutton';
// import { settings } from 'cluster';


@Component({
	selector: 'reportssel',
	templateUrl: './reports.component.html'
})

export class ReportsComponent implements AfterViewInit {
	@ViewChild('radiobutton1') radiobutton1: jqxRadioButtonComponent;
	@ViewChild('radiobutton2') radiobutton2: jqxRadioButtonComponent;
	@ViewChild('radiobutton3') radiobutton3: jqxRadioButtonComponent;
	@ViewChild('radiobutton4') radiobutton4: jqxRadioButtonComponent;
	@ViewChild('inputDiv') inputDiv: ElementRef;

	private theme: string = 'metro';
	private height: string | number = 25;
	private widthButton: string | number = '100%';
	private heightButton: string | number = 30;

	private selectedIndex: number = 0;
	private widthDropDownList: string | number = '100%';
	private autoDropDownHeight: boolean = true;


	private dropdownlist1Source: string[] = [
		'Car Report',
		'Employee Report'
	];

	private dropdownlist2Source: string[] = [
		'Broken',
		'Not working properly',
		'Something went wrong',
		'I dont know'
	];

	private dropdownlist3And4Source: string[] = [
		'2016',
		'2015',
		'2014',
		'2013'
	];

	private subjectsDropDownSource: string[] = [
		'Subject1',
		'Subject2',
		'Subject3',
		'Subject4',
		'Subject5',
		'Subject6',
		'Subject7'
	];

	private dropdownlist5Source: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'Octomber',
		'November',
		'December'
	];

	private radioButtonsSettings: any = {
		width: 75,
		height: this.height,
		checked: false,
		theme: this.theme
	};

	ngAfterViewInit() {
		this.radiobutton1.createComponent(this.radioButtonsSettings);
		this.radiobutton2.createComponent(this.radioButtonsSettings);
		this.radiobutton3.createComponent(this.radioButtonsSettings);
		this.radiobutton4.createComponent(this.radioButtonsSettings);
	}

	checked(event: any): void {
		this.inputDiv.nativeElement.style.display = "none";
	}

	unchecked(event: any): void {
		this.inputDiv.nativeElement.style.display = "inline-block";
	}
}