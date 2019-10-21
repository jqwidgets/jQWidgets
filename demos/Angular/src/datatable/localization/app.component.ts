import { Component } from '@angular/core';


import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localdata: generatedata(250, false),
        dataFields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Name', dataField: 'name', width: 215 },
        { text: 'Produkt', dataField: 'productname', width: 220 },
        { text: 'Datum', dataField: 'date', width: 210, cellsAlign: 'right', cellsFormat: 'd' },
        { text: 'Qt.', dataField: 'quantity', cellsAlign: 'right', width: 60 },
        { text: 'Preis', dataField: 'price', cellsFormat: "c2", cellsAlign: 'right' }
    ];

    localizationObject = this.getLocalization();

    getLocalization(): any {
        let localizationobj: any = {};
        localizationobj.pagerGoToPageString = 'Gehe zu:';
        localizationobj.pagerShowRowsString = 'Zeige Zeile:';
        localizationobj.pagerRangeString = ' von ';
        localizationobj.pagerNextButtonString = 'voriger';
        localizationobj.pagerFirstButtonString = 'erste';
        localizationobj.pagerLastButtonString = 'letzte';
        localizationobj.pagerPreviousButtonString = 'nächster';
        localizationobj.sortAscendingString = 'Sortiere aufsteigend';
        localizationobj.sortDescendingString = 'Sortiere absteigend';
        localizationobj.sortRemoveString = 'Entferne Sortierung';
        localizationobj.emptydatastring = 'keine Daten angezeigt';
        localizationobj.firstDay = 1;
        localizationobj.percentSymbol = '%';
        localizationobj.currencySymbol = '€';
        localizationobj.currencySymbolPosition = 'after';
        localizationobj.decimalSeparator = '.';
        localizationobj.thousandsSeparator = ',';

        let days = {
            // full day names
            names: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            // abbreviated day names
            namesAbbr: ['Sonn', 'Mon', 'Dien', 'Mitt', 'Donn', 'Fre', 'Sams'],
            // shortest day names
            namesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
        };

        localizationobj.days = days;

        let months = {
            // full month names (13 months for lunar calendards -- 13th month should be '' if not lunar)
            names: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember', ''],
            // abbreviated month names
            namesAbbr: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez', '']
        };

        let patterns = {
            d: 'dd.MM.yyyy',
            D: 'dddd, d. MMMM yyyy',
            t: 'HH:mm',
            T: 'HH:mm:ss',
            f: 'dddd, d. MMMM yyyy HH:mm',
            F: 'dddd, d. MMMM yyyy HH:mm:ss',
            M: 'dd MMMM',
            Y: 'MMMM yyyy'
        }

        localizationobj.patterns = patterns;
        localizationobj.months = months;
        return localizationobj;
    }
}

