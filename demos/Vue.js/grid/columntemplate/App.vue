<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
                 :autorowheight="true" :pageable="true">
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
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Link', datafield: 'link', width: 550, cellsrenderer: this.linkrenderer },
                    { text: 'Title', datafield: 'title', width: 200 },
                    { text: 'Publish Date', datafield: 'pubDate', width: 250, cellsformat: 'D' },
                    { text: 'Creator', datafield: 'creator', width: 200 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'title', type: 'string' },
                    { name: 'link', type: 'string' },
                    { name: 'pubDate', type: 'date' },
                    { name: 'creator', map: 'dc\\:creator', type: 'string' },
                ],
                root: 'channel',
                record: 'item',
                url: 'feed.xml'
            };
        },
        methods: {
            linkrenderer: function (row, column, value) {
                if (value.indexOf('#') != -1) {
                    value = value.substring(0, value.indexOf('#'));
                }
                let format = { target: '"_blank"' };
                let html = jqx.dataFormat.formatlink(value, format);
                return html;
            }
        }
    }
</script>

<style>
</style>