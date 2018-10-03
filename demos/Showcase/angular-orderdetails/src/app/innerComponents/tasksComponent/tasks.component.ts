import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemsEnumeration } from '../../items.enum';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxKanbanComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxkanban';

@Component({
    selector: 'taskssel',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class TasksComponent {
    @ViewChild('referenceKanbanTasks') myKanban: jqxKanbanComponent;

    private enumItems = new ItemsEnumeration();

    constructor(private _dataServices: DataService) {
        this._dataServices.getItemData(this.enumItems.taskskanbanvalues)
            .then(result => {
                this.source.localdata = result;
                this.dataAdapter.dataBind();

            })
            .catch(error => {
                console.log("Error with 'TasksRecordsComponent'", error);
            });
    }

    width: string | number = '100%';
    height: string | number = 680;
    theme: string = 'metro';

    fields: any[] =
        [
            { name: 'id', type: 'string' },
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'label', type: 'string' },
            { name: 'tags', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
            { name: 'resourceId', type: 'number' }
        ];

    source: any =
        {
            localData: [],
            dataType: 'array',
            dataFields: this.fields
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    resourcesAdapterFunc = (): any => {
        let resourcesSource =
            {
                localData: [
                    { id: 0, name: 'No name', image: '../assets/styles/images/common.png', common: true },
                    { id: 1, name: 'Andrew Fuller', image: '../assets/images/andrew.png' },
                    { id: 2, name: 'Janet Leverling', image: '../assets/images/janet.png' },
                    { id: 3, name: 'Steven Buchanan', image: '../assets/images/steven.png' },
                    { id: 4, name: 'Nancy Davolio', image: '../assets/images/nancy.png' },
                    { id: 5, name: 'Michael Buchanan', image: '../assets/images/michael.png' },
                    { id: 6, name: 'Margaret Buchanan', image: '../assets/images/margaret.png' },
                    { id: 7, name: 'Robert Buchanan', image: '../assets/images/robert.png' },
                    { id: 8, name: 'Laura Buchanan', image: '../assets/images/laura.png' },
                    { id: 9, name: 'Laura Buchanan', image: '../assets/images/anne.png' }
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
            { text: 'Backlog', iconClassName: this.getIconClassName(), dataField: 'new', maxItems: 4 },
            { text: 'In Progress', iconClassName: this.getIconClassName(), dataField: 'work', maxItems: 2 },
            { text: 'Done', iconClassName: this.getIconClassName(), dataField: 'done', maxItems: 5 }
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
        element[0].getElementsByClassName('jqx-kanban-item-text')[0].style.background = item.color;
    };

    myKanbanOnItemAttrClicked(event: any): void {
        let args = event.args;
        if (args.attribute == 'template') {
            this.myKanban.removeItem(args.item.id);
        }
    };

    itemIndex: number = 0;
    myKanbanonColumnAttrClicked(event: any): void {
        let args = event.args;
        if (args.attribute == 'button') {
            args.cancelToggle = true;
            if (!args.column.collapsed) {
                let colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
                this.myKanban.addItem({
                    status: args.column.dataField,
                    text: '<input placeholder="(No Title)" style="width: 96%; margin-top:2px; border-radius: 3px;' +
                        'border-color: #ddd; line-height:20px; height: 20px;" class="jqx-input" id="newItem' + this.itemIndex + '" value= "" />',
                    tags: 'new task',
                    color: colors[Math.floor(Math.random() * 4)],
                    resourceId: Math.floor(Math.random() * 4)
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