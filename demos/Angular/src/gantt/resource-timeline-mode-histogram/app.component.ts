import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxGanttComponent } from 'jqwidgets-ng/jqxgantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('gantt', { static: false }) gantt: jqxGanttComponent;
	 
	   source: any[] = [
		{
			label: 'Preparing',
			synchronized: true,
			expanded: true,
			disableResources: true,
			tasks: [
				{
					label: 'Plan Finances',
					dateStart: '2023-03-01',
					dateEnd: '2023-03-05',
					resources: [{
						id: 'trina',
						label: 'Trina',
						maxCapacity: 8
					}]
				},
				{
					label: 'Find an Office',
					dateStart: '2023-03-02',
					dateEnd: '2023-03-05',
					progress: 50,
					resources: [{
						id: 'michelle',
						label: 'Michelle',
						capacity: 4,
						maxCapacity: 10,
					}]
				},
				{
					label: 'Hire Staff',
					dateStart: '2023-03-02',
					dateEnd: '2023-03-10',
					resources: [{
						id: 'melanie',
						label: 'Melanie',
						capacity: 8,
						maxCapacity: 10,
					}]
				},
				{
					label: 'Staff Management',
					dateStart: '2023-03-10',
					dateEnd: '2023-03-15'
				},
				{
					label: 'Schedule',
					dateStart: '2023-03-10',
					dateEnd: '2023-03-12',
					resources: [{
						id: 'david',
						label: 'David',
						maxCapacity: 8
					}]
				},
			]
		},
		{
			label: 'Execution',
			synchronized: true,
			expanded: true,
			disableResources: true,
			tasks: [
				{
					label: 'Product Vision',
					dateStart: '2023-03-15',
					dateEnd: '2023-03-20',
					resources: [{
						id: 'chris',
						label: 'Chris',
						maxCapacity: 12
					}]
				},
				{
					label: 'Product Development',
					dateStart: '2023-03-20',
					dateEnd: '2023-03-31',
					resources: 'chris'
				},
				{
					label: 'Product Release',
					dateStart: '2023-04-01',
					dateEnd: '2023-04-05',
					resources: [{
						id: 'taylor',
						label: 'Taylor',
						capacity: 4,
						maxCapacity: 4
					}]
				}
			]
		},
		{
			label: 'Release',
			synchronized: true,
			expanded: true,
			disableResources: true,
			tasks: [
				{
					label: 'Release Management',
					dateStart: '2023-04-06',
					dateEnd: '2023-04-10'
				},
				{
					label: 'Updates',
					dateStart: '2023-04-15',
					dateEnd: '2023-05-01',
					resources: 'chris'
				},
				{
					label: 'Upgrades',
					dateStart: '2023-05-01',
					dateEnd: '2023-06-01',
					resources: [{
						id: 'brad',
						label: 'Brad'
					}]
				}
			]
		},
		{
			label: 'Support',
			synchronized: true,
			expanded: true,
			disableResources: true,
			tasks: [
				{
					label: 'QA',
					dateStart: '2023-04-01',
					dateEnd: '2023-05-01',
					resources: 'chris'
				},
				{
					label: 'Customer Service',
					dateStart: '2023-04-01',
					dateEnd: '2023-05-31',
					resources: 'michelle'
				},
				{
					label: 'Statistics and Data Analysis',
					dateStart: '2023-04-01',
					dateEnd: '2023-05-01'
				}
			]
		}
	]
	
	taskColumns: any[] = [
		{
			label: 'Name',
			value: 'label',
			size: '40%'
		},
		{
			label: 'From',
			value: 'dateStart',
			size: '20%'
		},
		{
			label: 'To',
			value: 'dateEnd',
			size: '20%'
		},
		{
			label: 'Owner',
			value: 'resources'
		}
	]
	
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
	treeMin: string = '25%';
	resourcePanelSize: string = '30%';
	resourceTimelineMode: string = 'histogram';
	view:string = 'week';
	timelineHeaderFormatFunction: any = function (date, type, isHeaderDetailsContainer) {
		const that = document.querySelector('jqx-gantt-chart');
		if (isHeaderDetailsContainer) {
			return date.toLocaleDateString('en', { month: 'long', year: 'numeric' });
		}
		else {
			return date.toLocaleDateString('en', { day: 'numeric', weekday: 'long' });
		}
	}
}
