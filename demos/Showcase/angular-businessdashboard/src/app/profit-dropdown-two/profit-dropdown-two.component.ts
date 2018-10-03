import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'app-profit-dropdown-two',
    templateUrl: './profit-dropdown-two.component.html',
    styleUrls: ['./profit-dropdown-two.component.css']
})
export class ProfitDropdownTwoComponent implements OnInit {

    @ViewChild('dropDown') dropDown: jqxDropDownListComponent;
    @Output() updateGridEvent = new EventEmitter();

    lastCheckItem: jqwidgets.DropDownListItem;

    constructor() { }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        this.dropDown.checkAll();
    }

    sourceRegion: string[] =
        [
            'ASIA',
            'EUROPE',
            'AUSTRALIA',
            'NORTH AMERICA',
            'SOUTH AMERICA'
        ]

    selectionRenderer = function () {
        return 'REGION';
    }

    checkChange = function (event) {
        let items = this.dropDown.getCheckedItems();

        if (items.length === 0) {
            this.dropDown.checkItem(this.lastCheckItem);
            return false;
        } else {
            this.lastCheckItem = items[0];
        }

        this.updateGridEvent.emit(items);
    }
}
