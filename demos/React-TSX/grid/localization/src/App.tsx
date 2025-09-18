import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function getLocalization(): any {
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
    localizationobj.todaystring = "Heute";
    localizationobj.clearstring = "Löschen";

    const days = {
        names: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        namesAbbr: ['Sonn', 'Mon', 'Dien', 'Mitt', 'Donn', 'Fre', 'Sams'],
        namesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    };

    localizationobj.days = days;

    const months = {
        names: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember', ''],
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

const App = () => {
    const source = useMemo(() => ({
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(250, false)
    }), []);

    const columns = useMemo(() => [
        { text: 'Name', columntype: 'textbox', filtertype: 'textbox', datafield: 'name', width: 180 },
        { text: 'Produkt', filtertype: 'textbox', datafield: 'productname', width: 220 },
        { text: 'Datum', datafield: 'date', columntype: 'datetimeinput', filtertype: 'date', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qt.', datafield: 'quantity', columntype: 'numberinput', filtertype: 'textbox', cellsalign: 'right', width: 60 },
        { text: 'Preis', datafield: 'price', columntype: 'numberinput', filtertype: 'textbox', cellsformat: 'c2', cellsalign: 'right' }
    ], []);

    const localization = useMemo(() => getLocalization(), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            pageable={true}
            showfilterrow={true}
            filterable={true}
            autoheight={true}
            editable={true}
            selectionmode={'singlecell'}
            localization={localization}
        />
    );
};

export default App;