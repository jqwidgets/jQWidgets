<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :pageable="true" :columnsResize="true" :pagerButtonsCount="10">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source, {
                    formatData: (data) => {
                        data.featureClass = 'P';
                        data.style = 'full';
                        data.username = 'jqwidgets';
                        data.maxRows = 50;

                        return data;
                    }
                }
                ),
                columns: [
                    { text: 'Country Name', dataField: 'countryName', width: 200 },
                    { text: 'City', dataField: 'name', width: 250 },
                    { text: 'Population', dataField: 'population', cellsFormat: 'f', width: 250 },
                    { text: 'Continent Code', dataField: 'continentCode' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'jsonp',
                dataFields: [
                    { name: 'countryName', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode', type: 'string' }
                ],
                url: 'http://api.geonames.org/searchJSON'
            };
        }
    };
</script>

<style>
</style>