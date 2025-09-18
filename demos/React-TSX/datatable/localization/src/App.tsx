import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function getLocalization() {
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
    localizationobj.days = {
        names: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        namesAbbr: ['Sonn', 'Mon', 'Dien', 'Mitt', 'Donn', 'Fre', 'Sams'],
        namesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    };
    localizationobj.months = {
        names: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember', ''],
        namesAbbr: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez', '']
    };
    localizationobj.patterns = {
        D: 'dddd, d. MMMM yyyy',
        F: 'dddd, d. MMMM yyyy HH:mm:ss',
        M: 'dd MMMM',
        T: 'HH:mm:ss',
        Y: 'MMMM yyyy',
        d: 'dd.MM.yyyy',
        f: 'dddd, d. MMMM yyyy HH:mm',
        t: 'HH:mm'
    };
    return localizationobj;
}

const App = () => {
    const source = useMemo(() => ({
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
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { text: 'Name', dataField: 'name', width: 215 },
        { text: 'Produkt', dataField: 'productname', width: 220 },
        { text: 'Datum', dataField: 'date', width: 210, cellsAlign: 'right', cellsFormat: 'd' },
        { text: 'Qt.', dataField: 'quantity', cellsAlign: 'right', width: 60 },
        { text: 'Preis', dataField: 'price', cellsFormat: "c2", cellsAlign: 'right' }
    ], []);

    const localization = useMemo(() => getLocalization(), []);

    return (
        <JqxDataTable
            theme={'material-purple'}
            // @ts-ignore
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            pageable={true}
            editable={true}
            filterable={true}
            localization={localization}
        />
    );
};

export default App;