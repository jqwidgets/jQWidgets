<template>
    <div>
        <JqxGrid ref="myGrid" @filter="myGridOnFilter()"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :filterable="true" :showfilterrow="true">
        </JqxGrid>

        <div ref="eventLog" style="font-size: 13px; width: 800px; max-width: 800px; overflow: auto; margin-top: 20px; font-family: Verdana"></div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'Country', filtertype: 'list',
                        filteritems: new jqx.dataAdapter(this.countriesSource), datafield: 'countryCode', displayfield: 'Country',
                        createfilterwidget: (column, htmlElement, editor) => {
                            editor.jqxDropDownList({ displayMember: 'label', valueMember: 'value' });
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {

            const countries = [
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
            ];

            this.countriesSource = {
                datatype: 'array',
                datafields: [
                    { name: 'label', type: 'string' },
                    { name: 'value', type: 'string' }
                ],
                localdata: countries
            };

            const countriesAdapter = new jqx.dataAdapter(this.countriesSource, { autoBind: true });

            this.source = {
                datatype: 'array',
                localdata:
                    [
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
                    ],
                datafields: [
                    // name - determines the field's name.
                    // value - the field's value in the data source.
                    // values - specifies the field's values.
                    // values.source - specifies the foreign source. The expected value is an array.
                    // values.value - specifies the field's value in the foreign source.
                    // values.name - specifies the field's name in the foreign source.
                    // When the adapter is loaded, each record will have a field called 'Country'. The 'Country' for each record comes from the countriesAdapter where the record's 'countryCode' from gridAdapter matches to the 'value' from countriesAdapter.
                    { name: 'Country', type: 'string', value: 'countryCode', values: { source: countriesAdapter.records, value: 'value', name: 'label' } },
                    { name: 'countryCode', type: 'string' }
                ]
            };
        },
        methods: {
            myGridOnFilter: function () {
                // get filter information.
                let filterInformation = this.$refs.myGrid.getfilterinformation();
                let filterdata = {};
                let filterslength = 0;
                let data = {};
                for (let x = 0; x < filterInformation.length; x++) {
                    // column's data field.
                    let filterdatafield = filterInformation[x].datafield;
                    // column's filter group.
                    let filterGroup = filterInformation[x].filter;
                    // column's filters.
                    let filters = filterGroup.getfilters();
                    // filter group's operator.
                    data[filterdatafield + 'operator'] = filterGroup.operator;
                    for (let m = 0; m < filters.length; m++) {
                        filters[m].datafield = filterdatafield;
                        // filter's value.
                        let filtervalue = filters[m].value;
                        data['filtervalue' + filterslength] = filtervalue.toString();
                        // filter's id.
                        if (filters[m].id) {
                            data['filterid' + filterslength] = filters[m].id.toString();
                        }
                        // filter's condition.
                        data['filtercondition' + filterslength] = filters[m].condition;
                        // filter's operator.
                        data['filteroperator' + filterslength] = filters[m].operator;
                        // filter's data field.
                        data['filterdatafield' + filterslength] = filterdatafield;
                        filterslength++;
                    }
                }
                this.$refs.eventLog.innerHTML = JSON.stringify(data);
            }
        }
    }
</script>

<style>
</style>