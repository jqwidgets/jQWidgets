import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	@ViewChild('viewSelector', { static: false }) viewSelector: jqxDropDownListComponent;
	
	view: string = 'year';
	views: any[] = [
		{ label: 'Year', value: 'year' },
		{ label: 'Month', value: 'month' },
		{ label: 'Week', value: 'week' },
		{ label: 'Day', value: 'day' }
	]
	
	setView(event: any) {
		this.gantt.setOptions({view: this.viewSelector.val()});
		this.view = this.viewSelector.val();
	}
	
	source: any[] =  [
		{
			//Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
			label: 'Project 1',
			dateStart: '2023-05-10',
			dateEnd: '2024-06-10',
			type: 'project',
			expanded: true,
			tasks: [
				{
					label: 'Task 1.1',
					dateStart: '2023-02-10',
					dateEnd: '2023-04-10',
					type: 'task'
				},
				{
					label: 'Task 1.2',
					dateStart: '2023-03-27',
					dateEnd: '2023-06-10',
					type: 'task'
				},
				{
					label: 'Milestone 1',
					dateStart: '2023-04-21',
					type: 'milestone'
				},
				{
					label: 'Project 2',
					dateStart: '2023-06-11',
					dateEnd: '2024-12-31T23:59:59',
					type: 'project',
					expanded: true,
					tasks: [
						{
							label: 'Task 2.1',
							dateStart: '2023-06-12',
							dateEnd: '2024-01-1',
							type: 'task'
						},
						{
							label: 'Task 2.2',
							dateStart: '2023-01-02',
							dateEnd: '2024-06-01',
							type: 'task'
						},
						{
							label: 'Milestone 2.1',
							dateStart: '2023-06-30',
							type: 'milestone'
						},
						{
							label: 'Task 2.3',
							dateStart: '2023-12-29T10:25:07',
							dateEnd: '2023-12-31T9:0:0',
							type: 'task'
						}
					]
				}
			]
		}]
}
