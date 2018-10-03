<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true">
        </JqxGrid>
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
                dataAdapter: new jqx.dataAdapter(this.source,
                    {
                        formatData: (data) => {
                            data.featureClass = 'P';
                            data.style = 'full';
                            data.maxRows = 50;
                            data.username = 'jqwidgets';
                            return data;
                        }
                    }
                ),
                columns: [
                    { text: 'Country Name', datafield: 'countryName', width: 200 },
                    { text: 'City', datafield: 'name', width: 170 },
                    { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
                    { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'jsonp',
                datafields: [
                    { name: 'countryName', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode', type: 'string' }
                ],
                url: 'http://api.geonames.org/searchJSON'
            }
        }
    }
</script>

<style>
</style>