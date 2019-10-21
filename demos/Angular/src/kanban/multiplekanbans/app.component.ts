import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    staff: any[] =
    [
        { id: 0, name: 'No name', image: './../../../jqwidgets/styles/images/common.png', common: true },
        { id: 1, name: 'Andrew Fuller', image: './../../../images/andrew.png' },
        { id: 2, name: 'Janet Leverling', image: './../../../images/janet.png' },
        { id: 3, name: 'Steven Buchanan', image: './../../../images/steven.png' }
    ];
	
	getWidth() : any {
		if (document.body.offsetWidth < 400) {
			return '50%';
		}
		
		return 400;
	}

    kanbanColumns: any[] =
    [
        { text: 'Backlog', dataField: 'new', access: 'none', maxItems: 5 },
        { text: 'In Progress', dataField: 'work', access: 'none', maxItems: 5 },
        { text: 'Done', dataField: 'done', access: 'none', maxItems: 5, collapseDirection: 'right' }
    ];

    kanbanSourceConnected1: any[] =
    [
        { id: 3, status: 'done', text: 'Combine Orders', tags: 'orders, combine', color: '#5dc3f0', resourceId: 3 },
        { id: 4, status: 'work', text: 'Change Billing Address', tags: 'billing', color: '#6bbd49', resourceId: 1 },
        { id: 5, status: 'new', text: 'One item added to the cart', tags: 'cart', color: '#5dc3f0', resourceId: 3 },
        { id: 6, status: 'work', text: 'Login 404 issue', tags: 'issue, login', color: '#6bbd49' }
    ];

    kanbanSourceConnected2: any[] =
    [
        { id: 0, status: 'new', text: 'State opened does not contain items', tags: 'state, open', color: '#5dc3f0', resourceId: 1 },
        { id: 1, status: 'done', text: 'Patch #2043', tags: 'patch', color: '#6bbd49', personId: 2 },
        { id: 2, status: 'work', text: 'Change payment method', tags: 'payment', color: '#6bbd49', resourceId: 2 }
    ];
}