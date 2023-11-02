import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	 
	source: any[] =   [
		{
			//Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
			label: 'Project 1',
			synchronized: true,
			expanded: true,
			type: 'project',
			connections: [
				{
					target: 1,
					type: 0
				}
			],
			tasks: [
				{
					label: 'Task 1.1',
					dateStart: '2022-05-10',
					dateEnd: '2023-04-10',
					type: 'task',
					connections: [
						{
							target: 2,
							type: 2
						}
					]
				},
				{
					label: 'Task 1.2',
					dateStart: '2022-03-27',
					dateEnd: '2023-06-10',
					type: 'task'
				},
				{
					label: 'Milestone 1',
					dateEnd: '2023-03-15',
					type: 'milestone',
					connections: [
						{
							target: 4,
							type: 1
						}
					]
				}
			]
		},
		{
			label: 'Task 2',
			dateStart: '2023-06-21',
			dateEnd: '2023-12-10',
			type: 'task'
		}
	]
}
