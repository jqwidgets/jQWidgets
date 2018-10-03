import { Component, OnDestroy, ViewChild } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';

@Component({
    selector: 'app-administrative-tasks',
    templateUrl: './administrative-tasks.component.html',
    styleUrls: ['./administrative-tasks.component.css']
})
export class AdministrativeTasksComponent {

    @ViewChild('myKanban') myKanban: jqxKanbanComponent;

    constructor() { }

    ngOnDestroy() {
        this.myKanban.destroy();
    }

    private itemIndex: number = 0;

    private kanbanTemplate: string =
        `<div class="jqx-kanban-item" id="">
            <div class='jqx-kanban-item-color-status'></div>
            <div class='jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon'></div>
            <div class='jqx-kanban-item-text'></div>
            <div style='display: none;' class='jqx-kanban-item-footer'></div>
        </div>";`

    private resourcesAdapterFunc = () => {
        const resourcesSource =
            {
                dataType: "json",
                dataFields: [
                    { name: "id", type: "number" },
                    { name: "name", type: "string" },
                    { name: "common", type: "boolean" }
                ],
                url: "https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=taskskanbanusers"
            };
        return new jqx.dataAdapter(resourcesSource);
    }

    private kanbanSource: any = {
        dataType: "json",
        dataFields: [
            { name: "id", type: "string" },
            { name: "status", map: "state", type: "string" },
            { name: "text", map: "label", type: "string" },
            { name: "tags", type: "string" },
            { name: "color", map: "hex", type: "string" },
            { name: "resourceId", type: "number" }
        ],
        url: "https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=taskskanban"
    }

    private kanbanDataAdapter = new jqx.dataAdapter(this.kanbanSource);

    private kanbanColumns: jqwidgets.KanbanColumns[] = [
        { text: "Backlog", iconClassName: 'jqx-icon-plus-alt', dataField: "new", maxItems: 6 },
        { text: "In Progress", iconClassName: 'jqx-icon-plus-alt', dataField: "work", maxItems: 6 },
        { text: "Done", iconClassName: 'jqx-icon-plus-alt', dataField: "done", maxItems: 6 }
    ];

    private itemRenderer = (item, data, resource) => {
        item.find('.jqx-kanban-item-color-status')[0].innerHTML = '<span style="line-height: 23px; margin-left: 5px;">' + resource.name + '</span>';
        item[0].addEventListener('dblclick', (event) => {
            let input;
            let addToHeader = false;
            let header = null;
            let textElement;
            if (event.target.nodeName === 'SPAN' && event.target.parentElement.classList.contains('jqx-kanban-item-color-status')) {

                input = document.createElement('input');
                input.placeholder = '(No Title)';
                input.classList.add('jqx-input');
                input.style.cssText = 'border: none; background: transparent; width: 80%;';

                header = event.target;
                header.innerHTML = '';
                header.appendChild(input);

                addToHeader = true;
            }

            if (!addToHeader) {
                input = document.createElement('textarea');
                input.placeholder = '(No Title)';
                input.classList.add('jqx-input');
                input.style.cssText = 'border: none; width: 100%;';

                textElement = item.find('.jqx-kanban-item-text');
                textElement[0].innerHTML = '';
                textElement[0].appendChild(input);
            }

            input.addEventListener('mousedown', (event) => event.stopPropagation());
            input.addEventListener('mouseup', (event) => event.stopPropagation());
            input.addEventListener('blur', () => {
                let value = input.value;
                if (!addToHeader) {
                    let span = document.createElement('span');
                    span.textContent = value;
                    textElement[0].appendChild(span);
                } else {
                    header.innerHTML = value;
                }
                input.remove();
            });
            input.addEventListener('keydown', (event) => {
                if (event.keyCode === 13) {
                    if (!addToHeader) {
                        let span = document.createElement('span');
                        span.textContent = event.target.value;
                        event.target.parentElement.insertBefore(span, null);
                        event.target.remove();
                    } else {
                        header.innerHTML = event.target.value;
                    }
                }
            })
            input.focus();
        });
    }

    private columnRenderer = (element, collapsedElement, column) => {
        if (!column) return;
        let columnItems = this.myKanban.getColumnItems(column.dataField).length;
        element.find('.jqx-kanban-column-header-status')[0].innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
    }

    private itemAttrClicked = (event) => {
        let args = event.args;
        if (args.attribute === 'template') {
            this.myKanban.removeItem(args.item.id);
        }
    }

    private columnAttrClicked = (event) => {
        let args = event.args;
        if (args.attribute === "button") {
            args.cancelToggle = true;
            if (!args.column.collapsed) {
                let colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
                this.myKanban.addItem({
                    status: args.column.dataField,
                    text: '<textarea placeholder="(No Title)" style = "width: 96%; margin-top:2px; border-radius: 3px; border:none; line-height:20px; height: 50px;" class= "jqx-input" id="newItem' + this.itemIndex + '"></textarea>',
                    tags: 'new task',
                    color: colors[Math.floor(Math.random() * 4)],
                    resourceId: null
                });
                let input = document.getElementById('newItem' + this.itemIndex);
                input.addEventListener('mousedown', (event) => event.stopPropagation());
                input.addEventListener('mouseup', (event) => event.stopPropagation());
                input.addEventListener('keydown', (event) => {
                    if (event.keyCode === 13) {
                        let target = event.target as HTMLTextAreaElement;
                        let span = document.createElement('span');
                        span.innerHTML = target.value;
                        target.parentElement.insertBefore(span, null);
                        target.remove();
                    }
                });
                input.focus();
                this.itemIndex++;
            }
        }
    }
}
