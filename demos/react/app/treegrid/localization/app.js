import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(2);
    }
    render () {
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
            localizationobj.currencySymbol = '&euro;'; // &euro; - "€" HTML Name
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
        // prepare the data
        let source =
        {
            dataType: 'array',
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata()
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // create Tree Grid
        let columns = [
            { text: 'Bestellung Name', dataField: 'name', align: 'center', width: 250 },
            { text: 'Auftraggeber', dataField: 'customer', align: 'center', width: 250 },
            { text: 'Preis', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 180 },
            {
                text: 'Bestellung Datum', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm',
                cellsRenderer: (rowKey, column, cellValue, rowData, cellText) => {
                    if (rowData.level === 0) {
                        return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                    }
                    return cellText;
                }
            }
        ];
        return (
            <JqxTreeGrid ref='myTreeGrid'
                width={850}
                source={dataAdapter}
                sortable={true}
                pageable={true}
                pagerMode={'advanced'}
                localization={getLocalization()}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
