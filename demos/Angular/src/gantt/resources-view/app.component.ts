import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt!: jqxGanttComponent;
	 
	  source: any[] = [
		{
			label: 'Office Configuration',
			synchronized: true,
			expanded: true,
			type: 'task',
			disableResources: true,
			tasks: [
				{
					label: 'Office Setup',
					synchronized: true,
					expanded: true,
					disableResources: true,
					type: 'project',
					tasks: [
						{
							label: 'Office Acquiring',
							dateStart: '2023-01-02',
							dateEnd: '2023-01-05',
							type: 'task',
							connections: [{ target: 3, type: 1 }],
							resources: [{ id: 'taylor', label: 'Taylor' }, { id: 'michael', label: 'Michael' }]
						},
						{
							label: 'Office Interior',
							dateStart: '2023-01-05',
							dateEnd: '2023-01-15',
							type: 'task',
							connections: [{ target: 4, type: 0 }],
							resources: [{ id: 'anna', label: 'Anna' }, { id: 'samantha', label: 'Samantha' }, { id: 'christina', label: 'Christina' }]
						},
						{
							label: 'Office Security',
							dateStart: '2023-01-05',
							dateEnd: '2023-01-10',
							type: 'task',
							connections: [{ target: 5, type: 1 }],
							resources: { id: 'tommy', label: 'Tommy' }
						}
					]
				},
				{
					label: 'Employee Positioning',
					dateStart: '2023-01-11',
					dateEnd: '2023-01-15',
					type: 'task',
					resources: { id: 'carol', label: 'Carol' }
				},
				{
					label: 'Cleaners',
					dateStart: '2023-01-10',
					dateEnd: '2023-01-15',
					type: 'task',
					resources: { id: 'rachel', label: 'Rachel' }
				},
				{
					label: 'Catering',
					dateStart: '2023-01-11',
					dateEnd: '2023-01-16',
					type: 'task'
				},
				{
					label: 'Transport',
					dateStart: '2023-01-12',
					dateEnd: '2023-01-17',
					type: 'task'
				},
				{
					label: 'Human Resources',
					dateStart: '2023-01-10',
					dateEnd: '2023-01-20',
					type: 'task',
					resources: [{ id: 'annabell', label: 'Annabell' }, { id: 'monica', label: 'Monica' }]
				}
			]
		},
		{
			label: 'Operations',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [
				{
					label: 'Development',
					dateStart: '2023-01-20',
					dateEnd: '2023-02-01',
					type: 'task',
					resources: [{ id: 'jason', label: 'Jason' }, { id: 'aaron', label: 'Aaron' }]
				},
				{
					label: 'Marketing',
					dateStart: '2023-01-10',
					dateEnd: '2023-01-31',
					type: 'task',
					resources: { id: 'sonya', label: 'Sonya' }
				},
				{
					label: 'Quality Assurance',
					dateStart: '2023-02-01',
					dateEnd: '2023-02-05',
					type: 'task',
					resources: { id: 'rick', label: 'Rick' }
				},
				{
					label: 'Market Researchers',
					dateStart: '2023-01-01',
					dateEnd: '2023-01-05',
					type: 'task',
					resources: ['jason', 'sonya']
				},
				{
					label: 'Managers',
					dateStart: '2023-01-20',
					dateEnd: '2023-01-31',
					type: 'task',
					resources: { id: 'ryan', label: 'Ryan' }
				}
			]
		},
		{
			label: 'Production',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			progress: 50,
			resources: 4,
			tasks: [
				{
					label: 'Technology',
					synchronized: true,
					expanded: true,
					disableResources: true,
					type: 'project',
					tasks: [
						{
							label: 'Updates',
							dateStart: '2023-01-16',
							dateEnd: '2023-01-20',
							type: 'task',
							connections: [{ target: 19, type: 0 }],
							resources: { id: 'oliver', label: 'Oliver' }
						},
						{
							label: 'Lifecycle',
							dateStart: '2023-01-16',
							dateEnd: '2023-01-18',
							type: 'task',
							connections: [{ target: 20, type: 1 }],
						},
						{
							label: 'Testing',
							dateStart: '2023-01-20',
							dateEnd: '2023-01-25',
							type: 'task',
							resources: { id: 'jessica', label: 'Jessica' }
						}
					]
				},
				{
					label: 'Servers and Backup',
					dateStart: '2023-01-10',
					dateEnd: '2023-01-12',
					type: 'task',
					resources: 'oliver'
				},
				{
					label: 'Meetings',
					dateStart: '2023-01-12',
					dateEnd: '2023-01-15',
					type: 'task',
					resources: 'ryan'
				},
				{
					label: 'Feedback and Improvements',
					dateStart: '2023-02-01',
					dateEnd: '2023-02-10',
					type: 'task'
				}
			]
		}
	];
	
	taskColumns: any[] = [
		{
			label: 'Task Name',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Start Time',
			value: 'dateStart',
			size: '25%'
		},
		{
			label: 'Assignee',
			value: 'resources',
			size: '20%',
			formatFunction: (value, item) => {
				const gantt = this.gantt;
				const resources: any[] = gantt.getResources();
				const tasks: any[] = gantt.getTasks();
				
				if (!resources) {
					return;
				}
				
				console.log(tasks);
				const getResource = (d) => resources.find((res) => res.id.toString() === d.toString());
				
				if (!item || item.disableResources) {
					return '';
				}
				const itemResources = item.resources;
				if (!itemResources.length) {
					return '<span class="gantt-chart-task-assignee unassigned">?</span>';
				}
				else if (itemResources.length === 1) {
					return `<span>${getResource(itemResources[0]).label}</span>`;
				}
				else {
					let result = '';
					for (let i = 0; i < itemResources.length; i++) {
						const resource = getResource(itemResources[i]);
						if (resource) {
							result += `<span class="gantt-chart-task-assignee ${resource.id.toLowerCase()}">${resource.label.charAt(0)}</span>`;
						}
					}
					return result;
				}
			}
		},
		{
			label: 'Duration',
			value: 'duration'
		}
	];
	
	resourceColumns: any[] = [
		{
			label: 'Name',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Completion',
			value: 'progress',
			formatFunction: (data) => data + '%',
			size: '20%'
		},
		{
			label: 'Workload',
			value: 'workload',
			formatFunction: (data) => data + 'h',
			size: '20%'
		},
		{
			label: 'Capacity',
			value: 'capacity',
			formatFunction: (data) => data + 'h',
			size: '20%'
		}
	]
	
    durationUnit: string = 'day';
	hideResourcePanel:  Boolean = true;
	groupByResources: Boolean = true;
	
	treeMin: string = '25%';
	resourcePanelSize: string = '30%';
	view: string = 'week';
	timelineHeaderFormatFunction: any = (date: Date, type: string, isHeaderDetailsContainer: Boolean) => {
	    const gantt = this.gantt;
		if (type === 'week') {
			const startDayOfWeek: Date = new Date(date),
			endDateOfWeek: Date = new Date(date);
			endDateOfWeek.setDate(date.getDate() + 6);
			return startDayOfWeek.toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' }) + ' - ' +
				endDateOfWeek.toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' });
		}
		if (type === 'day') {
			return date.toLocaleDateString('en', { day: 'numeric', month: 'short' });
		}
	}
}
