<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'U.S. Real Home Price vs Building Cost Indeces (1950-2010)'"
                  :description="'Source: http://www.econ.yale.edu/~shiller/data.htm'"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>

        <table style="width: 850px">
            <tbody>
                <tr>
                    <td style="padding-left: 50px">
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to rotate:</p>

                        <JqxSlider @change="sliderStartAngle($event)"
                                   :width="240" :min="0" :max="360" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'">
                        </JqxSlider>

                    </td>
                    <td>
                        <p style="font-family: Verdana; font-size: 12px">Select the series type:</p>

                        <JqxDropDownList @change="dropDownListSeries($event)"
                                         :width="200" :height="25" :source="seriesList"
                                         :selectedIndex="1" :dropDownHeight="100">
                        </JqxDropDownList>

                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 50px">
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to change the radius:</p>

                        <JqxSlider @change="sliderRadius($event)"
                                   :width="240" :min="80" :max="140" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'" :value="120">
                        </JqxSlider>

                    </td>
                    <td>
                        <p style="font-family: Verdana; font-size: 12px">Select color scheme:</p>

                        <JqxDropDownList @change="dropDownListColor($event)"
                                         :width="200" :height="25" :source="colorsSchemesList"
                                         :selectedIndex="0" :dropDownHeight="100">
                        </JqxDropDownList>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxChart,
            JqxSlider,
            JqxDropDownList
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
                xAxis: {
                    dataField: 'Year',
                    unitInterval: 10,
                    maxValue: 2010,
                    valuesOnTicks: true,
                    labels: { autoRotate: true },
                    bands: this.bands()
                },
                seriesGroups: [
                    {
                        polar: true,
                        radius: 160,
                        type: 'spline',
                        enableSeriesToggle: false,
                        valueAxis:
                        {
                            labels: {
                                formatSettings: { decimalPlaces: 0 },
                                autoRotate: true
                            },
                            bands:
                            [
                                { minValue: 50, maxValue: 130, color: '#00FF00', opacity: 0.2, dashStyle: '2,2', lineWidth: 1 },
                                { minValue: 131, maxValue: 160, color: '#FCD537', opacity: 0.2, dashStyle: '2,2', lineWidth: 1 },
                                { minValue: 161, maxValue: 200, color: '#FF0000', opacity: 0.2, dashStyle: '2,2', lineWidth: 1 }
                            ]
                        },
                        series: [
                            { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.9, lineWidth: 3 },
                            { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9, lineWidth: 3 }
                        ]
                    }
                ],
                colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
                seriesList: ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']
            }
        },
        beforeCreate: function () {
            this.source =
                {
                    datatype: 'tab',
                    datafields: [
                        { name: 'Year' },
                        { name: 'HPI' },
                        { name: 'BuildCost' },
                        { name: 'Population' },
                        { name: 'Rate' }
                    ],
                    url: 'homeprices.txt'
                };
        },
        methods: {
            bands: function () {
                let recessions =
                    [
                        { from: 1969.91, to: 1970.83 },
                        { from: 1973.83, to: 1975.25 },
                        { from: 1980, to: 1980.58 },
                        { from: 1981.58, to: 1982.83 },
                        { from: 1990.58, to: 1991.25 },
                        { from: 2001.25, to: 2001.83 },
                        { from: 2007.91, to: 2009.5 }
                    ];

                let bands = [];

                for (let i = 0; i < recessions.length; i++) {
                    bands.push({ minValue: recessions[i].from, maxValue: recessions[i].to, fillColor: 'red', opacity: 0.2 });
                }

                return bands;
            },
            sliderStartAngle: function (event) {
                let value = event.args.value;
                this.$refs.myChart.seriesGroups[0].startAngle = value;
                this.$refs.myChart.seriesGroups[0].endAngle = value + 360;
                this.$refs.myChart.update();
            },
            sliderRadius: function (event) {
                let value = event.args.value;
                this.$refs.myChart.seriesGroups[0].radius = value;
                this.$refs.myChart.update();
            },
            dropDownListColor: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.colorScheme = value;
            },
            dropDownListSeries: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.seriesGroups[0].type = value;
                this.$refs.myChart.update();
            }
        }
    };
</script>

<style>
</style>