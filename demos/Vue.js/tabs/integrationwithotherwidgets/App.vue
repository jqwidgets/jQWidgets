<template>
    <JqxTabs ref="myTabs"
        :width="getWidth" :height="560" :initTabContent="initWidgets">
        <ul>
            <li style="margin-left: 30px;">
                <div style="height: 20px; margin-top: 5px;">
                    <div style="float: left;">
                        <img width="16" height="16" src="../../../images/catalogicon.png" />
                    </div>
                    <div style="margin-left: 4px; vertical-align: middle; text-align: center; float: left;">
                        US Indexes
                    </div>
                </div>
            </li>
            <li>
                <div style="height: 20px; margin-top: 5px;">
                    <div style="float: left;">
                        <img width="16" height="16" src="../../../images/pieicon.png" />
                    </div>
                    <div style="margin-left: 4px; vertical-align: middle; text-align: center; float: left;">
                        NASDAQ compared to S&P 500
                    </div>
                </div>
            </li>
        </ul>
        <div style="overflow: hidden;">
            <JqxGrid ref="myGrid" :autoCreate="false"></JqxGrid>
            <div style="margin-top: 10px; height: 15%;">
                The S&P 500 index finished 2011 less than a point away from where it ended 2010
                -- 0.04 points down to be exact. That's the smallest annual change in history. At
                its peak in April, the S&P had climbed more than 8%. But by October, at the lowest
                levels of the year, it was down more than 12%. The Nasdaq, meanwhile, lost 1.8%
                for the year.
            </div>
        </div>
        <div style="overflow: hidden;">
            <JqxChart ref="myChart" :autoCreate="false" style="width: 100%; height: 100%"></JqxChart>
        </div>
    </JqxTabs>
</template>

<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

    export default {
        components: {
            JqxTabs,
            JqxChart,
            JqxGrid
        },     
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        methods: {
            initWidgets: function (tab) {
                switch (tab) {
                    case 0:
                        this.initGrid();
                        break;
                    case 1:
                        this.initChart();
                        break;
                }
            },
            initGrid: function () {
                const source =
                    {
                        datatype: 'csv',
                        datafields: [
                            { name: 'Date' },
                            { name: 'S&P 500' },
                            { name: 'NASDAQ' }
                        ],
                        url: 'nasdaq_vs_sp500.txt'
                    };

                const dataAdapter = new jqx.dataAdapter(source);

                const settings = {
                    width: '100%',
                    height: '84%',
                    source: dataAdapter,
                    columns: [
                        { text: 'Date', datafield: 'Date', cellsformat: 'd', width: 250 },
                        { text: 'S&P 500', datafield: 'S&P 500', width: 150 },
                        { text: 'NASDAQ', datafield: 'NASDAQ' }
                    ]
                };

                const myGrid = this.$refs.myGrid.createComponent(settings);
            },
            initChart: function () {
                const source =
                    {
                        datatype: 'csv',
                        datafields: [
                            { name: 'Date' },
                            { name: 'S&P 500' },
                            { name: 'NASDAQ' }
                        ],
                        url: 'nasdaq_vs_sp500.txt'
                    };

                const dataAdapter = new jqx.dataAdapter(source);

                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                const settings = {
                    title: 'U.S. Stock Market Index Performance (2011)',
                    description: 'NASDAQ Composite compared to S&P 500',
                    enableAnimations: true,
                    showLegend: true,
                    padding: { left: 10, top: 5, right: 10, bottom: 5 },
                    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                    source: dataAdapter,
                    categoryAxis:
                    {
                        dataField: 'Date',
                        formatFunction: (value) => {
                            return months[value.getMonth()];
                        },
                        toolTipFormatFunction: (value) => {
                            return value.getDate() + '-' + months[value.getMonth()];
                        },
                        type: 'date',
                        baseUnit: 'month',
                        showTickMarks: true,
                        tickMarksInterval: 1,
                        tickMarksColor: '#888888',
                        unitInterval: 1,
                        showGridLines: true,
                        gridLinesInterval: 3,
                        gridLinesColor: '#888888',
                        valuesOnTicks: false
                    },
                    colorScheme: 'scheme04',
                    seriesGroups:
                    [
                        {
                            type: 'line',
                            valueAxis:
                            {
                                displayValueAxis: true,
                                description: 'Daily Closing Price',
                                axisSize: 'auto',
                                tickMarksColor: '#888888'
                            },
                            series: [
                                { dataField: 'S&P 500', displayText: 'S&P 500' },
                                { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                            ]
                        }
                    ]
                };

                const myChart = this.$refs.myChart.createComponent(settings);
            }
        }
    }
</script>