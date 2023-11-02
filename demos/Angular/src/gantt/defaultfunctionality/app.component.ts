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
			size: '60%'
		},
		{
			label: 'Duration (hours)',
			value: 'duration',
			formatFunction: (date) => parseInt(date)
		}
	]
	source: any[] = [
		{
			label: 'PRD & User-Stories',
			dateStart: '2023-01-10',
			dateEnd: '2023-03-10',
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Persona & Journey',
			dateStart: '2023-03-01',
			dateEnd: '2023-04-30',
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Architecture',
			dateStart: '2023-04-11',
			dateEnd: '2023-05-16',
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Prototyping',
			dateStart: '2023-05-17',
			dateEnd: '2023-07-01',
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Design',
			dateStart: '2023-07-02',
			dateEnd: '2023-08-01',
			class: 'design-team',
			type: 'task'
		},
		{
			label: 'Development',
			dateStart: '2023-08-01',
			dateEnd: '2023-09-10',
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Testing & QA',
			dateStart: '2023-09-11',
			dateEnd: '2023-10-10',
			class: 'qa-team',
			type: 'task'
		},
		{
			label: 'UAT Test',
			dateStart: '2023-10-12',
			dateEnd: '2023-11-11',
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Handover & Documentation',
			dateStart: '2023-10-17',
			dateEnd: '2023-11-31',
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Release',
			dateStart: '2023-11-01',
			dateEnd: '2023-12-31',
			class: 'release-team',
			type: 'task'
		}
	]
}
