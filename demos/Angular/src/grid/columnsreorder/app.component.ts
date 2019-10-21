import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('eventLog', { static: false }) eventLog: ElementRef;

    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'name' },
            { name: 'type' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat' },
            { name: 'protein' }
        ],
        id: 'id',
        url: './../../../sampledata/beverages.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'Name', datafield: 'name', width: 200 },
        { text: 'Beverage Type', datafield: 'type', width: 200 },
        { text: 'Calories', datafield: 'calories', width: 100 },
        { text: 'Total Fat', datafield: 'totalfat' }
    ];

    myGridOnColumnReordered(event: any): void {
        let column = event.args.columntext;
        let newindex = event.args.newindex
        let oldindex = event.args.oldindex;
        this.eventLog.nativeElement.innerHTML = `Column: ${column}, New Index: ${newindex}, Old Index: ${oldindex}`;
    }
}