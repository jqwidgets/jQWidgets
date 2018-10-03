<template>
    <div>
        <JqxLoader ref="jqxLoader"
                   :autoOpen="true"
                   :imagePosition="'top'"
                   :width="100"
                   :height="60">
        </JqxLoader>
        <JqxGrid :source="dataAdapter"
                 :columnsresize="true"
                 :showdefaultloadelement="false"
                 :autoshowloadelement="false"
                 :columns="columns"
                 :width="850"
                 :height="400">
        </JqxGrid>
    </div>
</template>
<script>
    import JqxLoader from "jqwidgets-scripts/jqwidgets-vue/vue_jqxloader.vue";
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxLoader,
            JqxGrid
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, {
                    downloadComplete: function (data, status, xhr) { },
                    loadComplete: () => {
                        this.$refs.jqxLoader.close();
                    },
                    loadError: (xhr, status, error) => { console.log(xhr, status, error); },
                    formatData: (data) => {
                        Object.assign(data, {
                            featureClass: "P",
                            style: "full",
                            maxRows: 50,
                            username: "jqwidgets"
                        });
                        return data;
                    }
                }),
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
                datatype: "jsonp",
                datafields: [
                    { name: 'countryName', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode', type: 'string' }
                ],
                url: "http://api.geonames.org/searchJSON"
            }
        }
    }

</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-right: 5px;
    }
</style>
