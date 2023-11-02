import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';
import 'jqwidgets-ng/jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	view: string = 'week';
	durationUnit: string = 'day';
	treeMin: number = 300;
	taskFiltering: Boolean = true;
	hideTimelineHeaderDetails: Boolean = true;
	taskColumns: any[] = [
		{
			label: 'Tasks',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Start Time',
			value: 'dateStart',
			size: '30%'
		},
		{
			label: 'Priority',
			value: 'value',
			customEditor: (label, value) => {
				const container = document.createDocumentFragment();
				const labelElement = document.createElement('label');
				const dropDownList = document.createElement('div');
				labelElement.textContent = 'Priority';
				const instance = window['JQXLite'](dropDownList)['jqxDropDownList']({
					popupZIndex: 9999,
					source: [{ label: 'Low', value: 0 },
					{ label: 'Medium', value: 1 },
					{ label: 'High', value: 2 }]
				});
				window['JQXLite'](dropDownList, {selectedIndex: value});

				container.appendChild(labelElement);
				container.appendChild(dropDownList);
				return container;
			},
			setCustomEditorValue: (editor, label, value) => {
				window['JQXLite'](editor.querySelector('.jqx-dropdownlist')).val(value);
			},
			getCustomEditorValue: (editor) => {
				return window['JQXLite'](editor.querySelector('.jqx-dropdownlist')).val();
			},
			formatFunction: (value) => ['Low', 'Medium', 'High'][value]
		}
	]
	source: any[] = [
		{
			label: 'Project A',
			value: 1,
			class: 'priority-medium',
			dateStart: '2023-05-01',
			duration: 20,
			expanded: true,
			type: 'project',
			tasks: [
				{
					label: 'Task A',
					value: 2,
					class: 'priority-high',
					dateStart: '2023-05-03',
					duration: 5,
					connections: [{
						target: 5,
						type: 1
					}],
				},
				{
					label: 'Project A-1',
					value: 2,
					class: 'priority-high',
					dateStart: '2023-05-02',
					duration: 10,
					expanded: true,
					type: 'project',
					tasks: [
						{
							label: 'Task B',
							value: 1,
							class: 'priority-medium',
							dateStart: '2023-05-05',
							duration: 3
						},
						{
							label: 'Task B-1',
							value: 0,
							class: 'priority-low',
							dateStart: '2023-05-06',
							duration: 2
						},
						{
							label: 'Task B-2',
							value: 2,
							class: 'priority-high',
							dateStart: '2023-05-8',
							duration: 3
						},
						{
							label: 'Task B-3',
							value: 2,
							class: 'priority-high',
							dateStart: '2023-05-10',
							duration: 4
						},
						{
							label: 'Task B-4',
							value: 1,
							class: 'priority-medium',
							dateStart: '2023-05-10',
							duration: 4
						}
					]
				},
				{
					label: 'Project A-2',
					value: 0,
					class: 'priority-low',
					dateStart: '2023-05-05',
					duration: 8,
					expanded: true,
					type: 'project',
					tasks: [
						{
							label: 'Task C',
							value: 0,
							class: 'priority-low',
							dateStart: '2023-05-05',
							duration: 4,
							connections: [{
								target: 10,
								type: 1
							},
							{
								target: 11,
								type: 1
							}]
						},
						{
							label: 'Task C-1',
							value: 0,
							class: 'priority-low',
							dateStart: '2023-05-10',
							duration: 4
						},
						{
							label: 'Task C-2',
							value: 1,
							class: 'priority-medium',
							dateStart: '2023-05-11',
							duration: 3,
							connections: [{
								target: 12,
								type: 1
							}]
						},
						{
							label: 'Task C-3',
							value: 1,
							class: 'priority-medium',
							dateStart: '2023-05-12',
							duration: 2
						}
					]
				}
			]
		}
	]
}
