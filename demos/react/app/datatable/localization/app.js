import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let data = generatedata(250);

        let source =
            {
                localdata: data,
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

        let dataAdapter = new $.jqx.dataAdapter(source);

        let getLocalization = () => {
            let localizationobj = {};
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

        let columns =
            [
                { text: 'Name', dataField: 'name', width: 215 },
                { text: 'Produkt', dataField: 'productname', width: 220 },
                { text: 'Datum', dataField: 'date', width: 210, cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Qt.', dataField: 'quantity', cellsAlign: 'right', width: 60 },
                { text: 'Preis', dataField: 'price', cellsFormat: "c2", cellsAlign: 'right' }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} editable={true}
                pageable={true} filterable={true}
                columns={columns} localization={getLocalization()}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
