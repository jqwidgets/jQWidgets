import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'app-profit-dropdown-one',
    templateUrl: './profit-dropdown-one.component.html',
    styleUrls: ['./profit-dropdown-one.component.css']
})
export class ProfitDropdownOneComponent implements OnInit {

    @ViewChild('dropDown') dropDown: jqxDropDownListComponent;
    @Output() updateGridEvent = new EventEmitter();

    lastCheckItem: jqwidgets.DropDownListItem;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.dropDown.checkAll();
    }
    sourceQuarter: string[] =
        [
            'Q1 2014',
            'Q2 2014',
            'Q3 2014',
            'Q4 2014'
        ]

    selectionRenderer = function () {
        return 'QUARTER';
    }

    checkChange = function (event) {
        let items = this.dropDown.getCheckedItems();

        if (items.length === 0) {
            this.dropDown.checkItem(this.lastCheckItem);
            return false;
        } else {
            this.lastCheckItem = items[0];
        }

        let dataField = event.args.label.substr(0, 2).toLowerCase();
        if (event.args.checked) {
            this.updateGridEvent.emit({ dataField, update: 'show' });
        } else {
            this.updateGridEvent.emit({ dataField, update: 'hide' });
        }
    }
}

