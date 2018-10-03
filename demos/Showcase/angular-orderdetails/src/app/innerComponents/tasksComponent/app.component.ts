import { Component } from '@angular/core';

@Component({
	selector: 'tasksKanban',
	templateUrl: './app.component.html'
})

export class KanbanTasksComponent {
	constructor() {
		console.error('tasks -kanban- loaded!');
	}
}