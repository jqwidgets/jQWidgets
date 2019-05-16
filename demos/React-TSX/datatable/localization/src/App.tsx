import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(250, false)
        };

        this.state = {
            columns: [
                { text: 'Name', dataField: 'name', width: 215 },
                { text: 'Produkt', dataField: 'productname', width: 220 },
                { text: 'Datum', dataField: 'date', width: 210, cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Qt.', dataField: 'quantity', cellsAlign: 'right', width: 60 },
                { text: 'Preis', dataField: 'price', cellsFormat: "c2", cellsAlign: 'right' }
            ],
            localization: this.getLocalization(),
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} editable={true} filterable={true} localization={this.state.localization} />
        );
    }

    private getLocalization(): any {
        const localizationobj: any = {};
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

        const days = {
            // full day names
            names: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            // abbreviated day names
            namesAbbr: ['Sonn', 'Mon', 'Dien', 'Mitt', 'Donn', 'Fre', 'Sams'],
            // shortest day names
            namesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
        };

        localizationobj.days = days;

        const months = {
            // full month names (13 months for lunar calendards -- 13th month should be '' if not lunar)
            names: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember', ''],
            // abbreviated month names
            namesAbbr: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez', '']
        };

        const patterns = {
            D: 'dddd, d. MMMM yyyy',
            F: 'dddd, d. MMMM yyyy HH:mm:ss',
            M: 'dd MMMM',
            T: 'HH:mm:ss',
            Y: 'MMMM yyyy',
            d: 'dd.MM.yyyy',           
            f: 'dddd, d. MMMM yyyy HH:mm',           
            t: 'HH:mm'
        };

        localizationobj.patterns = patterns;
        localizationobj.months = months;
        return localizationobj;
    }
}

export default App;