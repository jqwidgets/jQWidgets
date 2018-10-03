import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fitness-instructors',
    templateUrl: './fitness-instructors.component.html',
    styleUrls: ['./fitness-instructors.component.css']
})
export class FitnessInstructorsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    private gridSource = {
        datatype: 'json',
        datafields: [
            { name: 'id', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'firstname', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'image', type: 'string' }
        ],
        url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=instructorsgrid'
    }

    private gridDataAdapter = new jqx.dataAdapter(this.gridSource);

    private gridColumns: jqwidgets.GridColumn[] = [
        {
            text: 'Picture', datafield: 'image', width: 110,
            cellsrenderer: function (row, column, value, htmlElement) {
                return '<img style="margin: 10px;" height="90" width=90" src="../../assets/' + value + '"/>';
            }
        },
        { text: 'First Name', datafield: 'firstname', width: 100, cellsalign: "center", cellclassname: "instructors-grid-cell" },
        { text: 'Last Name', datafield: 'lastname', width: 100, cellsalign: "center", cellclassname: "instructors-grid-cell" },
        { text: 'Phone', datafield: 'phone', cellsalign: "center", cellclassname: "instructors-grid-cell" }
    ]
}
