<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  @click="dumpEventInfo($event)" @toggle="dumpEventInfo($event)"
                  @rangeSelectionChanging="dumpEventInfo($event)" @rangeSelectionChanged="dumpEventInfo($event)"
                  @refreshBegin="dumpEventInfo($event)" @refreshEnd="dumpEventInfo($event)"
                  :title="'S&P 500 Index value and daily volume'"
                  :description="'(June 2010 - November 2014)'"
                  :enableCrosshairs="true" :enableAnimations="true" :padding="padding"
                  :animationDuration="1500" :source="dataAdapter" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme17'">
        </JqxChart>

        <div ref="eventsText" style="width: 847px; height: 200px; overflow: scroll; border: 1px solid lightgrey"></div>
    </div>
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
                padding: { left: 20, top: 5, right: 20, bottom: 5 },
                xAxis: {
                    dataField: 'Date',
                    type: 'date',
                    valuesOnTicks: true,
                    minValue: new Date(2014, 1, 1),
                    maxValue: new Date(2014, 10, 1),
                    labels:
                        {
                            formatFunction: (value) => {
                                return value.getDate() + '-' + this.months[value.getMonth()] + '<br>' + value.getFullYear().toString();
                            }
                        },
                    gridLines: { visible: false },
                    rangeSelector: {
                        size: 100,
                        padding: { top: 10, bottom: 0 },
                        backgroundColor: 'white',
                        dataField: 'SPClose',
                        baseUnit: 'month',
                        showGridLines: false,
                        formatFunction: (value) => {
                            return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        }
                    }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        linesUnselectMode: 'click',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                title: { text: 'S&P 500<br>' },
                                gridLines: { visible: false },
                            },
                        series: [
                            {
                                dataField: 'SPClose',
                                displayText: 'S&P Index Value',
                                lineWidth: 1
                            }
                        ]
                    },
                    {
                        type: 'area',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        linesUnselectMode: 'click',
                        valueAxis:
                            {
                                position: 'right',
                                title: { text: '<br>Daily Volume' },
                                gridLines: { visible: false },
                                labels:
                                    {
                                        formatFunction: (value) => {
                                            return value / 1000000 + 'M';
                                        }
                                    }
                            },
                        series: [
                            {
                                dataField: 'SPVolume',
                                displayText: 'S&P Index Volume',
                                lineWidth: 1,
                                opacity: 0.2
                            }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            this.source =
                {
                    datatype: 'tsv',
                    datafields: [
                        { name: 'Date' },
                        { name: 'SPOpen' },
                        { name: 'SPHigh' },
                        { name: 'SPLow' },
                        { name: 'SPClose' },
                        { name: 'SPVolume' },
                        { name: 'SPAdjClose' }
                    ],
                    url: 'nasdaq_vs_sp500_detailed.txt'
                };
        },
        methods: {
            toolTipCustomFormatFn: function (value, itemIndex, serie, group, categoryValue, categoryAxis) {
                let dataItem = this.dataAdapter.records[itemIndex];
                let volume = dataItem.SPVolume;
                return '<DIV style="text-align:left"><b>Date: ' +
                    categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                    '</b><br />Index value: ' + value +
                    '</b><br />Daily volume: ' + volume +
                    '</DIV>';
            },
            dumpEventInfo: function (event) {
                if (event.args) {
                    let args = event.args;
                    if (event.type.indexOf('refresh') != -1) {
                        if (this.$refs.myChart.getInstance() != args.instance)
                            return;
                    }
                    let date = new Date();
                    let line = 'Time: ' + (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()) + ', event: ' + event.type;
                    if (args.elementIndex)
                        line += ', element index: ' + args.elementIndex;
                    if (args.elementValue) {
                        line += ', value: ' + args.elementValue;
                    }
                    if (event.type == 'toggle') {
                        line += ', series group index: ' + this.$refs.myChart.seriesGroups.indexOf(args.seriesGroup);
                        line += ', visible: ' + args.state;
                    }
                    if (event.type.indexOf('rangeSelection') != -1) {
                        line += ', minValue: ' + args.minValue.getFullYear() + '-' + (args.minValue.getMonth() + 1) + '-' + args.minValue.getDate();
                        line += ', maxValue: ' + args.maxValue.getFullYear() + '-' + (args.maxValue.getMonth() + 1) + '-' + args.maxValue.getDate();
                    }
                    let textArea = this.$refs.eventsText;

                    textArea.innerHTML = line + '<br />' + textArea.innerHTML;
                }
            }
        }
    }
</script>

<style>
</style>