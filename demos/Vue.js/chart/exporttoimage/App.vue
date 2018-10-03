<template>
    <div>
        <JqxChart ref="myChart" style="width: 800px; height: 500px"
                  :title="'Economic comparison'"
                  :description="'GDP and Debt in 2010'"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>

        <div style="margin-top: 10px">
            <JqxButton v-on:click="jpegButtonOnClick()">
                Save As JPEG
            </JqxButton>
            <JqxButton v-on:click="pngButtonOnClick()">
                Save As PNG
            </JqxButton>
            <JqxButton v-on:click="pdfButtonOnClick()">
                Save As PDF
            </JqxButton>
        </div>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxChart,
            JqxButton
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Country'
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        valueAxis:
                            {
                                unitInterval: 5000,
                                title: { text: 'GDP & Debt per Capita($)<br>' }
                            },
                        series: [
                            { dataField: 'GDP', displayText: 'GDP per Capita' },
                            { dataField: 'Debt', displayText: 'Debt per Capita' }
                        ]
                    },
                    {
                        type: 'line',
                        valueAxis:
                            {
                                unitInterval: 10,
                                title: { text: 'Debt (% of GDP)<br>' },
                                position: 'right',
                                gridLines: { visible: false }
                            },
                        series: [
                            { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.source =
                {
                    datatype: 'csv',
                    datafields: [
                        { name: 'Country' },
                        { name: 'GDP' },
                        { name: 'DebtPercent' },
                        { name: 'Debt' }
                    ],
                    url: 'gdp_dept_2010.txt'
                };
        },
        methods: {
            jpegButtonOnClick: function () {
                this.$refs.myChart.saveAsJPEG('myChart.jpeg', 'https://www.jqwidgets.com/export_server/export.php');
            },
            pngButtonOnClick: function () {
                this.$refs.myChart.saveAsPNG('myChart.png', 'https://www.jqwidgets.com/export_server/export.php');
            },
            pdfButtonOnClick: function () {
                this.$refs.myChart.saveAsPDF('myChart.pdf', 'https://www.jqwidgets.com/export_server/export.php');
            }
        }
    };
</script>

<style>
    .jqx-button {
        width: 94px;
        display: inline-block;
        margin: 2px;
    }
</style>