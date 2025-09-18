import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const eventLog = useRef<HTMLDivElement>(null);

    const countries = useMemo(() => [
        { value: 'AF', label: 'Afghanistan' },
        { value: 'AL', label: 'Albania' },
        { value: 'DZ', label: 'Algeria' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaijan' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrain' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BY', label: 'Belarus' },
        { value: 'BE', label: 'Belgium' },
        { value: 'BZ', label: 'Belize' },
        { value: 'BJ', label: 'Benin' },
        { value: 'BM', label: 'Bermuda' },
        { value: 'BR', label: 'Brazil' },
        { value: 'BN', label: 'Brunei' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'CM', label: 'Cameroon' },
        { value: 'CA', label: 'Canada' },
        { value: 'CL', label: 'Chile' },
        { value: 'CN', label: 'China' },
        { value: 'CO', label: 'Columbia' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'HR', label: 'Croatia (Hrvatska)' },
        { value: 'CU', label: 'Cuba' },
        { value: 'CY', label: 'Cyprus' },
        { value: 'CZ', label: 'Czech Republic' },
        { value: 'DK', label: 'Denmark' },
        { value: 'TP', label: 'East Timor' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'EG', label: 'Egypt' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'EE', label: 'Estonia' },
        { value: 'ET', label: 'Ethiopia' },
        { value: 'FI', label: 'Finland' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
        { value: 'GR', label: 'Greece' },
        { value: 'HK', label: 'Hong Kong' },
        { value: 'HU', label: 'Hungary' },
        { value: 'IS', label: 'Iceland' },
        { value: 'IN', label: 'India' },
        { value: 'ID', label: 'Indonesia' },
        { value: 'IR', label: 'Iran' },
        { value: 'IQ', label: 'Iraq' },
        { value: 'IE', label: 'Ireland' },
        { value: 'IL', label: 'Israel' },
        { value: 'IT', label: 'Italy' },
        { value: 'JM', label: 'Jamaica' },
        { value: 'JP', label: 'Japan' },
        { value: 'MX', label: 'Mexico' },
        { value: 'MC', label: 'Monaco' },
        { value: 'MA', label: 'Morocco' },
        { value: 'NL', label: 'Netherlands' },
        { value: 'NZ', label: 'New Zealand' },
        { value: 'NE', label: 'Niger' },
        { value: 'NG', label: 'Nigeria' },
        { value: 'KP', label: 'North Korea' },
        { value: 'NO', label: 'Norway' },
        { value: 'PA', label: 'Panama' },
        { value: 'PE', label: 'Peru' },
        { value: 'PH', label: 'Philippines' },
        { value: 'PL', label: 'Poland' },
        { value: 'PT', label: 'Portugal' },
        { value: 'RO', label: 'Romania' },
        { value: 'RU', label: 'Russia' },
        { value: 'SA', label: 'Saudi Arabia' },
        { value: 'SK', label: 'Slovak Republic' },
        { value: 'SI', label: 'Slovenia' },
        { value: 'ZA', label: 'South Africa' },
        { value: 'KR', label: 'South Korea' },
        { value: 'ES', label: 'Spain' },
        { value: 'SE', label: 'Sweden' },
        { value: 'CH', label: 'Switzerland' },
        { value: 'TN', label: 'Tunisia' },
        { value: 'TR', label: 'Turkey' },
        { value: 'UA', label: 'Ukraine' },
        { value: 'AE', label: 'United Arab Emirates' },
        { value: 'UK', label: 'United Kingdom' },
        { value: 'US', label: 'United States' }
    ], []);

    const countriesSource = useMemo(() => ({
        datafields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' }
        ],
        datatype: 'array',
        localdata: countries
    }), [countries]);

    const countriesAdapter = useMemo(() => new jqx.dataAdapter(countriesSource, { autoBind: true }), [countriesSource]);

    const source = useMemo(() => ({
        datafields: [
            { name: 'Country', value: 'countryCode', values: { source: countriesAdapter.records, value: 'value', name: 'label' } },
            { name: 'countryCode', type: 'string' }
        ],
        datatype: 'array',
        localdata: [
            { countryCode: 'UK' },
            { countryCode: 'US' },
            { countryCode: 'DE' },
            { countryCode: 'FR' },
            { countryCode: 'IN' },
            { countryCode: 'HK' }
        ]
    }), [countriesAdapter]);

    const columns = useMemo(() => [
        {
            columntype: 'dropdownlist',
            createeditor: (row: number, value: any, editor: any): void => {
                editor.jqxDropDownList({ width: '99%', height: 27, source: countriesAdapter, displayMember: 'label', valueMember: 'value' });
            },
            datafield: 'countryCode', displayfield: 'Country', text: 'Country'
        }
    ], [countriesAdapter]);

    const gridSource = useMemo(() => new jqx.dataAdapter(source), [source]);

    const myGridOnCellSelect = useCallback((event: any): void => {
        if (!myGrid.current || !eventLog.current) return;
        const column = myGrid.current.getcolumn(event.args.datafield);
        const value = myGrid.current.getcellvalue(event.args.rowindex, column.datafield!);
        const displayValue = myGrid.current.getcellvalue(event.args.rowindex, column.displayfield!);
        eventLog.current.innerHTML = '<div>Selected Cell<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + ', Value: ' + value + ', Label: ' + displayValue + '</div>';
    }, []);

    const myGridOnCellEndEdit = useCallback((event: any): void => {
        if (!myGrid.current || !eventLog.current) return;
        const column = myGrid.current.getcolumn(event.args.datafield);
        const container = eventLog.current;
        if (column.displayfield !== column.datafield) {
            container.innerHTML = '<div>Cell Edited:<br/>Index: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value.value + ', Label: ' + event.args.value.label
                + '<br/>Old Value: ' + event.args.oldvalue.value + ', Old Label: ' + event.args.oldvalue.label + '</div>';
        }
        else {
            container.innerHTML = '<div>Cell Edited:<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value
                + '<br/>Old Value: ' + event.args.oldvalue + '</div>';
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onCellselect={myGrid