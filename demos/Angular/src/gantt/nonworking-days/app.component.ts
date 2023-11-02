import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	
	nonworkingHours: any[] = [0, 1];
	source: any[] =   [{
		label: 'Project 1',
		dateStart: '2023-02-18T12:30:00',
		dateEnd: '2023-02-20T3:59:00',
		type: 'project',
		expanded: true,
		connections: [
			{
				target: 1,
				type: 0
			}
		],
		tasks: [
			{
				label: 'Task 1.1',
				dateStart: '2023-02-24',
				dateEnd: '2023-02-28',
				type: 'task',
				connections: [
					{
						target: 2,
						type: 1
					},
					{
						target: 4,
						type: 1
					}
				]
			},
			{
				label: 'Task 1.2',
				dateStart: '2023-2-19',
				dateEnd: '2023-2-29',
				type: 'task',
				connections: [
					{
						target: 3,
						type: 1
					}
				]
			}
		]
	},
	{
		label: 'Task 2',
		dateStart: '2023-02-21T15:30:00',
		dateEnd: '2023-03-2T15:30:00',
		type: 'task'
	},
	{
		label: 'Milestone 1',
		dateEnd: '2023-02-24',
		type: 'milestone',
		connections: [
			{
				target: 5,
				type: 1
			}
		]
	},
	{
		label: 'Task 3',
		dateStart: '2023-02-18T1:00:00',
		dateEnd: '2023-02-18T18:30:00',
		progress: 50,
		type: 'task'
	}
	]
}
