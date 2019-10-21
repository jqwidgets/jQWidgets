import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myKanban', { static: false }) myKanban: jqxKanbanComponent;

    theme: any;
    itemIndex: number = 0;

    fields: any[] =
    [
        { name: 'id', type: 'string' },
        { name: 'status', map: 'state', type: 'string' },
        { name: 'text', map: 'label', type: 'string' },
        { name: 'tags', type: 'string' },
        { name: 'color', map: 'hex', type: 'string' },
        { name: 'resourceId', type: 'number' }
    ];
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        localData: [
            { id: '1161', state: 'new', label: 'Make a new Dashboard', tags: 'dashboard', hex: '#36c7d0', resourceId: 3 },
            { id: '1645', state: 'work', label: 'Prepare new release', tags: 'release', hex: '#ff7878', resourceId: 1 },
            { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#96c443', resourceId: 3 },
            { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#ff7878', resourceId: 4 },
            { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#96c443' }
        ],
        dataType: 'array',
        dataFields: this.fields
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    resourcesAdapterFunc = (): any => {
        let resourcesSource =
            {
                localData: [
                    { id: 0, name: 'No name', image: './../../../jqwidgets/styles/images/common.png', common: true },
                    { id: 1, name: 'Andrew Fuller', image: './../../../images/andrew.png' },
                    { id: 2, name: 'Janet Leverling', image: './../../../images/janet.png' },
                    { id: 3, name: 'Steven Buchanan', image: './../../../images/steven.png' },
                    { id: 4, name: 'Nancy Davolio', image: './../../../images/nancy.png' },
                    { id: 5, name: 'Michael Buchanan', image: './../../../images/Michael.png' },
                    { id: 6, name: 'Margaret Buchanan', image: './../../../images/margaret.png' },
                    { id: 7, name: 'Robert Buchanan', image: './../../../images/robert.png' },
                    { id: 8, name: 'Laura Buchanan', image: './../../../images/Laura.png' },
                    { id: 9, name: 'Laura Buchanan', image: './../../../images/Anne.png' }
                ],
                dataType: 'array',
                dataFields: [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'image', type: 'string' },
                    { name: 'common', type: 'boolean' }
                ]
            };
        let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }

    getIconClassName = (): string => {
        switch (this.theme) {
            case 'darkblue':
            case 'black':
            case 'shinyblack':
            case 'ui-le-frog':
            case 'metrodark':
            case 'orange':
            case 'darkblue':
            case 'highcontrast':
            case 'ui-sunny':
            case 'ui-darkness':
                return 'jqx-icon-plus-alt-white ';
        }
        return 'jqx-icon-plus-alt';
    }

    columns: any[] =
    [
        { text: "Backlog", iconClassName: this.getIconClassName(), dataField: "new", maxItems: 6 },
        { text: "In Progress", iconClassName: this.getIconClassName(), dataField: "work", maxItems: 6 },
        { text: "Done", iconClassName: this.getIconClassName(), dataField: "done", maxItems: 6 }
    ];

    template: string =
    '<div class="jqx-kanban-item" id="">'
    + '<div class="jqx-kanban-item-color-status"></div>'
    + '<div style="display: none;" class="jqx-kanban-item-avatar"></div>'
    + '<div class="jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon"></div>'
    + '<div class="jqx-kanban-item-text"></div>'
    + '<div style="display: none;" class="jqx-kanban-item-footer"></div>'
    + '</div>';

    columnRenderer = (element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            let elementHeaderStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            let collapsedElementHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];

            let columnItems = this.myKanban.getColumnItems(column.dataField).length;

            elementHeaderStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
            collapsedElementHeaderStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
        }
    };
    
    itemRenderer = (element: any, item: any, resource: any): void => {
        element[0].getElementsByClassName('jqx-kanban-item-color-status')[0].innerHTML = '<span style="line-height: 23px; margin-left: 5px;">' + resource.name + '</span>';

        let container = element[0].getElementsByClassName('jqx-kanban-item-text')[0];

        element[0].addEventListener('dblclick', (event: any): void => {
            let domToNull = document.getElementsByClassName('jqx-kanban-item-text');

            for (let i = 0; i < domToNull.length; i++) {
                if (domToNull[i].children.length !== 0) {
                    let textArea = domToNull[i].getElementsByTagName('textarea')[0];
                    if (textArea)
                        domToNull[i].innerHTML = textArea.value;
                }
            }

            let currentText = container.innerHTML;
            container.innerHTML = '';

            let widgetContainer = document.createElement('div');
            let id = `textArea${this.itemIndex}`;
            widgetContainer.id = id;
            widgetContainer.style.border = 'none';

            container.appendChild(widgetContainer);

            let myTextArea = jqwidgets.createInstance(`#${id}`, 'jqxTextArea', { width: '100%', height: 35 })

            myTextArea.val(currentText);

            widgetContainer.addEventListener('keydown', (event: any): void => {
                if (event.keyCode == 13) {
                    if (myTextArea) {
                        container.innerHTML = myTextArea.val();
                    }
                }
            }, true);

            myTextArea.focus();
            this.itemIndex++;
        });
    };

    myKanbanOnItemAttrClicked(event: any): void {
        let args = event.args;
        if (args.attribute == 'template') {
            this.myKanban.removeItem(args.item.id);
        }
    };

    myKanbanonColumnAttrClicked(event: any): void {
        let args = event.args;
        if (args.attribute == 'button') {
            args.cancelToggle = true;
            if (!args.column.collapsed) {
                let colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
                this.myKanban.addItem({
                    status: args.column.dataField,
                    text: '<textarea placeholder="(No Title)" style="width: 96%; margin-top:2px; border-radius: 3px;' +
                    'border: none; line-height:20px; height: 50px;" class="jqx-input" id="newItem' + this.itemIndex + '" value=""></textarea>',
                    tags: 'new task',
                    color: colors[Math.floor(Math.random() * 4)],
                    resourceId: null
                });

                let id = `newItem${this.itemIndex}`;
                let myInput = document.getElementById(id);

                if (myInput !== null && myInput !== undefined) {
                    myInput.addEventListener('mousedown', (event: any): void => {
                        event.stopPropagation();
                    });

                    myInput.addEventListener('mouseup', (event: any): void => {
                        event.stopPropagation();
                    });

                    myInput.addEventListener('keydown', (event: any): void => {
                        if (event.keyCode == 13) {
                            let valueElement = `<span>${event.target.value}</span>`;
                            event.target.insertAdjacentHTML('beforebegin', valueElement);
                            event.target.remove();
                        }
                    });

                    myInput.focus();
                }
                this.itemIndex++;
            }
        }
    };
}