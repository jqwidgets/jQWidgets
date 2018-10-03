<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Country economic comparison'"
              :description="'Per capita GDP and Debt in 2010'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
    </JqxChart>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Country',
                    flip: false,
                    gridLines: { visible: false }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        toolTipFormatSettings: { sufix: ' USD', thousandsSeparator: ',' },
                        valueAxis:
                            {
                                title: {
                                    text: 'GDP & Debt per Capita (USD)<br>'
                                },
                                gridLines: { visible: false }
                            },
                        series:
                            [
                                { dataField: 'GDP', displayText: 'GDP per Capita' },
                                { dataField: 'Debt', displayText: 'Debt per Capita' }
                            ]
                    },
                    {
                        type: 'line',
                        valueAxis:
                            {
                                unitInterval: 10,
                                visible: true,
                                position: 'right',
                                title: { text: 'Debt (% of GDP)' },
                                gridLines: { visible: false },
                                labels: {
                                    horizontalAlignment: 'left',
                                    formatSettings: { sufix: '%' }
                                }
                            },
                        series:
                            [
                                {
                                    linesUnselectMode: 'click',
                                    dataField: 'DebtPercent',
                                    displayText: 'Debt (% of GDP)',
                                    labels:
                                        {
                                            visible: true,
                                            'class': this.fnLabelsClass,
                                            backgroundColor: 'white',
                                            padding: { left: 5, right: 5, top: 1, bottom: 1 },
                                            borderColor: this.fnLabelsBorderColor,
                                            backgroundOpacity: 0.7,
                                            borderOpacity: 0.7
                                        }
                                }
                            ],
                        bands: [
                            {
                                minValue: 90, maxValue: 90, fillColor: 'red', lineWidth: 2, dashStyle: '2,2'
                            }
                        ],
                        annotations: [
                            {
                                type: 'rect',
                                yValue: 90,
                                xValue: 6,
                                offset: { x: -45, y: -25 },
                                width: 90,
                                height: 20,
                                fillColor: '#EFEFEF',
                                lineColor: 'red',
                                text: {
                                    value: 'Debt threshold',
                                    offset: {
                                        x: 2,
                                        y: 2
                                    },
                                    'class': 'redLabel',
                                    angle: 0
                                }
                            }
                        ],
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
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
            fnLabelsClass: function (value, itemIndex, serie, group) {
                if (value > 100)
                    return 'redLabel';
                return 'greenLabel';
            },
            fnLabelsBorderColor: function (value, itemIndex, serie, group) {
                if (value > 100)
                    return '#FF0000';
                return '#89A54E';
            }
        }
    }
</script>

<style>
    .redLabel {
        fill: #FF0000;
        color: #FF0000;
        font-size: 11px;
        font-family: Verdana;
    }

    .greenLabel {
        fill: #89A54E;
        color: #89A54E;
        font-size: 11px;
        font-family: Verdana;
    }
</style>