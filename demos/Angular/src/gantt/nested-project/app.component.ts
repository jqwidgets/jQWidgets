import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	 
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
