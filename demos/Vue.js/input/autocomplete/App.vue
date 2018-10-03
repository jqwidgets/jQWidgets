<template>
    <JqxInput :width="200" :height="25" :source="source"
              :minLength="1" :placeHolder="'Enter a City'">
    </JqxInput>
</template>

<script>
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxInput
        },
        data: function () {
            return {
                source: (query, response) => {
                    let dataAdapter = new jqx.dataAdapter
                        (
                        {
                            datatype: 'jsonp',
                            datafields:
                                [
                                    { name: 'countryName' }, { name: 'name' },
                                    { name: 'population', type: 'float' },
                                    { name: 'continentCode' },
                                    { name: 'adminName1' }
                                ],
                            url: 'http://api.geonames.org/searchJSON',
                            data:
                                {
                                    featureClass: 'P',
                                    style: 'full',
                                    maxRows: 12,
                                    username: 'jqwidgets'
                                }
                        },
                        {
                            autoBind: true,
                            formatData: (data) => {
                                data.name_startsWith = query;
                                return data;
                            },
                            loadComplete: (data) => {
                                if (data.geonames.length > 0) {
                                    response($.map(data.geonames, (item) => {
                                        return {
                                            label: item.name + (item.adminName1 ? ', ' + item.adminName1 : '') + ', ' + item.countryName,
                                            value: item.name
                                        }
                                    }));
                                }
                            }
                        }
                        );
                }
            }
        }
    }
</script>

<style>
</style>