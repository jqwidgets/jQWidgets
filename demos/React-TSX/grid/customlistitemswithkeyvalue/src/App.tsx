import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const myGrid = useRef<JqxGrid>(null);
    const eventLog = useRef<HTMLDivElement>(null);

    const countries = useMemo(
        () => [
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
        ],
        [],
    );

    const countriesSource = useMemo(
        () => ({
            datafields: [
                { name: 'label', type: 'string' },
                { name: 'value', type: 'string' }
            ],
            datatype: 'array',
            localdata: countries
        }),
        [countries]
    );

    const countriesAdapter = useMemo(
        () => new jqx.dataAdapter(countriesSource, { autoBind: true }),
        [countriesSource]
    );

    const source = useMemo(
        () => ({
            datafields: [
                { name: 'Country', type: 'string', value: 'countryCode', values: { source: countriesAdapter.records, value: 'value', name: 'label' } },
                { name: 'countryCode', type: 'string' }
            ],
            datatype: 'array',
            localdata: [
                { countryCode: 'UK' },
                { countryCode: 'US' },
                { countryCode: 'DE' },
                { countryCode: 'FR' },
                { countryCode: 'UA' },
                { countryCode: 'CH' },
                { countryCode: 'ES' },
                { countryCode: 'TR' },
                { countryCode: 'PL' },
                { countryCode: 'NO' },
                { countryCode: 'CZ' },
                { countryCode: 'RU' },
                { countryCode: 'BG' },
                { countryCode: 'MX' },
                { countryCode: 'DK' },
                { countryCode: 'SE' },
                { countryCode: 'ZA' },
                { countryCode: 'CN' },
                { countryCode: 'HU' },
                { countryCode: 'RO' },
                { countryCode: 'JP' },
                { countryCode: 'PA' },
                { countryCode: 'MC' },
                { countryCode: 'IN' },
                { countryCode: 'HK' }
            ]
        }),
        [countriesAdapter]
    );

    const gridSource = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(
        () => [
            {
                createfilterwidget: (column: any, htmlElement: any, editor: any): void => {
                    editor.jqxDropDownList({ displayMember: 'label', valueMember: 'value' });
                },
                datafield: 'countryCode',
                displayfield: 'Country',
                filteritems: new jqx.dataAdapter(countriesSource),
                filtertype: 'list',
                text: 'Country'
            }
        ],
        [countriesSource]
    );

    const myGridOnFilter = useCallback(() => {
        const filterInformation = myGrid.current!.getfilterinformation();
        let filterslength = 0;
        const data: any = {};
        for (const filterInfoItem of filterInformation) {
            const filterdatafield = filterInfoItem.datafield;
            const filterGroup = filterInfoItem.filter;
            const filters = filterGroup.getfilters();
            data[filterdatafield + 'operator'] = filterGroup.operator;
            for (const filter of filters) {
                filter.datafield = filterdatafield;
                const filtervalue = filter.value;
                data['filtervalue' + filterslength] = filtervalue.toString();
                if (filter.id) {
                    data['filterid' + filterslength] = filter.id.toString();
                }
                data['filtercondition' + filterslength] = filter.condition;
                data['filteroperator' + filterslength] = filter.operator;
                data