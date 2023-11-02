import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	 
    taskColumns: any[] = [
		{
			label: 'Tasks',
			value: 'label',
			sort: 'asc',
			size: '60%'
		},
		{
			label: 'Duration (hours)',
			value: 'duration',
			formatFunction: (date) => parseInt(date)
		}
	]
	
	resourceColumns: any[] = [
		{
			label: 'Tasks',
			value: 'label',
			sort: 'asc',
			size: '60%'
		},
		{
			label: 'Work Time (hours)',
			value: 'workload',
			size: '20%'
		},
		{
			label: 'Progress',
			value: 'progress'
		}
	];
	
	source: any[] =  [
		{
			label: 'Project A',
			dateStart: '2023-01-10',
			dateEnd: '2023-03-10',
			type: 'project',
			expanded: true,
			synchronized: true,
			tasks: [
				{
					label: 'Task Z',
					dateStart: '2023-03-01',
					duration: 1500,
					progress: 30,
					connections: [{ target: 2, type: 1 }],
					resources: [{ id: 'resource1', label: 'Resource 1' }, { id: 'resource2', label: 'Resource 2' }]
				},
				{
					label: 'Task Y',
					dateStart: '2023-04-11',
					duration: 1500
				}
			]
		},
		{
			label: 'Task C',
			dateStart: '2023-05-17',
			duration: 1000,
			progress: 45,
			connections: [{ target: 4, type: 1 }],
			resources: [{ id: 'resource3', label: 'Resource 3' }, { id: 'resource4', label: 'Resource 4' }]
		},
		{
			label: 'Task D',
			dateStart: '2023-07-02',
			duration: 1000,
			progress: 20,
			connections: [{ target: 5, type: 1 }]
		},
		{
			label: 'Task E',
			dateStart: '2023-08-01',
			dateEnd: '2023-09-10',
			progress: 50,
			resources: [{ id: 'resource5', label: 'Resource 5' }]
		},
		{
			label: 'Project B',
			dateStart: '2023-09-11',
			dateEnd: '2023-10-10',
			type: 'project',
			expanded: true,
			synchronized: true,
			tasks: [
				{
					label: 'Task A',
					dateStart: '2023-10-12',
					dateEnd: '2023-11-11',
					connections: [{ target: 8, type: 1 }]
				},
				{
					label: 'Task C',
					dateStart: '2023-10-17',
					dateEnd: '2023-11-31',
					connections: [{ target: 9, type: 1 }]
				},
				{
					label: 'Task B',
					dateStart: '2023-11-01',
					dateEnd: '2023-12-31',
					progress: 10,
					resources: [{ id: 'resource6', label: 'Resource 6' }]
				}
			]
		}
	]
}
