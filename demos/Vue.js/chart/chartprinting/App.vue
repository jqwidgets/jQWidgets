<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Economic comparison'"
                  :description="'GDP and Debt in 2010'"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>

        <br />
        <br />

        <JqxButton v-on:click="btnOnClick()" width="80">Print</JqxButton>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxChart,
            JqxButton
        },
        data: function () {

            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
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
                                title: { text: 'Debt (% of GDP)' },
                                gridLines: { visible: false },
                                position: 'right'
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
            btnOnClick: function () {
                let content = this.$refs.myChart.$el.outerHTML;
                let newWindow = window.open('', '', 'width=800, height=500'),
                    document = newWindow.document.open(),
                    pageContent =
                        '<!DOCTYPE html>' +
                        '<html>' +
                        '<head>' +
                        '<meta charset="utf-8" />' +
                        '<title>jQWidgets Chart</title>' +
                        '</head>' +
                        '<body>' + content + '</body></html>';
                try {
                    document.write(pageContent);
                    document.close();
                    newWindow.print();
                    newWindow.close();
                }
                catch (error) {
                }
            }
        }
    }
</script>

<style>
</style>