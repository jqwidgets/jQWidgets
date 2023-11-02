import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	
	columnMinWidth: string = '30%';
	treeSize: string = '25%';
	view: string = 'day';
	width: number = 700;
	height: string = 'auto';
	taskColumns: any[] = [{
		label: 'Labels',
		value: 'label',
		//Column min size
		size: 100,
		//Column size
		minWidth: '30%',
		//Custom format function
		formatFunction: function (label) {
			if (label === 'Learn') {
				return ' <i class="material-icons">&#xE80C;</i>' + label;
			}
			else if (label === 'Work') {
				return ' <i class="material-icons">&#xE30A;</i>' + label;
			}
			else if (label === 'Travel') {
				return ' <i class="material-icons">&#xE53D;</i>' + label;
			}
			else if (label === 'Eat') {
				return ' <i class="material-icons">&#xE56C;</i>' + label;
			}
			else if (label === 'Shop') {
				return ' <i class="material-icons">&#xE25C;</i>' + label;
			}
			else if (label === 'Train') {
				return ' <i class="material-icons">&#xE52F;</i>' + label;
			}
			else {
				return label;
			}
		}
	},
	{
		label: 'Date Start',
		value: 'dateStart',
		//Custom format function
		formatFunction: (date) => new Date(date).toLocaleDateString('en', { hour: '2-digit', minute: '2-digit' }),
		minWidth: 100
	},
	{
		label: 'Date End',
		value: 'dateEnd',
		size: '25%',
		minWidth: '30%'
	}
	]
	
	source: any[] =  [
		{
			//Note: min/max of syncronized projects are automatically calculated based on the tasks
			label: 'Project 1',
			synchronized: true,
			expanded: true,
			type: 'project',
			tasks: [
				{
					label: 'Task 1.1',
					minDateStart: '2023-02-10',
					maxDateEnd: '2023-08-10',
					dateStart: '2023-2-10',
					dateEnd: '2023-4-10',
					type: 'task'
				},
				{
					label: 'Task 1.2',
					minDateStart: '2023-3-10',
					maxDateEnd: '2023-11-10',
					dateStart: '2023-3-10',
					dateEnd: '2023-6-10',
					type: 'task'
				},
				{
					label: 'Milestone 1',
					dateEnd: '2023-3-15',
					type: 'milestone'
				},
				{
					label: 'Project 2',
					dateStart: '2023-4-10',
					dateEnd: '2023-01-15',
					expanded: true,
					type: 'project',
					tasks: [
						{
							label: 'Task 2.1',
							minDateStart: '2023-2-10',
							maxDateEnd: '2023-08-10',
							dateStart: '2023-4-10',
							dateEnd: '2023-5-10',
							type: 'task'
						},
						{
							label: 'Task 2.2',
							minDateStart: '2023-03-10',
							maxDateEnd: '2023-11-10',
							dateStart: '207-05-10',
							dateEnd: '2023-6-10',
							type: 'task'
						},
						{
							label: 'Milestone 2',
							dateEnd: '2023-7-20',
							type: 'milestone'
						}
					]
				}
			]
		},
		{
			type: 'task',
			label: 'Task 3',
			dateStart: '2023-6-21',
			minDateStart: '2023-06-05',
			maxDateStart: '2023-07-05',
			dateEnd: '2023-12-10',
			minDateEnd: '2023-12-01',
			maxDateEnd: '2023-12-25'
		},
		{
			type: 'task',
			label: 'Task 4',
			dateStart: '2023-10-05',
			dateEnd: '2023-12-10',
			progress: 50,
			maxDuration: 60 * 24 * 60 * 60 * 1000 //60 days in miliseconds
		}
	]
}
