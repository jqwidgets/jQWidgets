import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxEditorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxeditor';

@Component({
    selector: 'app-quick-notes',
    templateUrl: './quick-notes.component.html',
    styleUrls: ['./quick-notes.component.css']
})
export class QuickNotesComponent implements OnInit {

    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;
    @ViewChild('myInput') myInput: jqxInputComponent;
    @ViewChild('myEditor') myEditor: jqxEditorComponent;

    constructor() { }

    ngOnInit() {
    }

    noteId: number = -1;
    data: any;
    height: number = window.innerHeight - 150;

    panels: jqwidgets.SplitterPanel[] = [
        { size: '25%', min: 250 }
    ];

    source: any = {
        datatype: 'json',
        dataFields: [
            { name: 'id', type: 'number' },
            { name: 'image', type: 'string' },
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'job', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'notes', type: 'string' }
        ],
        url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=quicknotesdata'
    }

    listBoxDataAdapter = new jqx.dataAdapter(this.source, {
        beforeLoadComplete: (records) => {
            this.data = records;
        },
        loadComplete: () => {
            this.updatePanel(0);
            this.noteId = 1;
        }
    });

    dropDownDataAdapter = new jqx.dataAdapter(this.source);

    listBoxRenderer = (index: number): string => {
        let dataRecord = this.data[index];
        let imgUrl = dataRecord.image;
        let img = '<img height="100" width="100" src="../../assets/' + imgUrl + '"/>';
        var table = '<table style="min-width: 130px;"><tr><td style="width: 120px;" rowspan="2">' + img + '</td><td>' + dataRecord.firstname + " " + dataRecord.lastname + '</td></tr><tr><td>' + dataRecord.job + '</td></tr></table>';
        return table;
    }

    dropDownRenderer = (index: number): string => {
        let dataRecord = this.data[index];
        let imgUrl = dataRecord.image;
        let img = '<img height="50" width="45" src="' + imgUrl + '"/>';
        let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + dataRecord.firstname + " " + dataRecord.lastname + '</td></tr><tr><td>' + dataRecord.job + '</td></tr></table>';
        return table;
    }

    updatePanel = (index: number): void => {
        let dataRecord = this.data[index];

        this.myDropDownList.setOptions({ disabled: false });
        this.myDropDownList.selectIndex(index);
        this.myDropDownList.setOptions({ disabled: true });
        this.myInput.val(dataRecord.title);
        this.myEditor.val(dataRecord.notes);
    }

    listBoxSelect = (event): void => {
        let index = event.args.index;
        this.updatePanel(index);
        this.noteId = index;
    }

    buttonClick = (): void => {
        this.data[this.noteId].notes = this.myEditor.val();
    }
}
