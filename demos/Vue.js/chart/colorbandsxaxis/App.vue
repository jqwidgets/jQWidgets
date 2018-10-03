<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'US Homeownership rate & recessions (1965-2014)'"
              :description="'(sources: US Census bureau, Wikipedia)'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
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
                padding: { left: 5, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Year',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    labels: { angle: -90 },
                    unitInterval: 1,
                    flip: false,
                    bands: this.bands() // attach the color bands to the xAxis
                },
                valueAxis: {
                    title: { text: 'Homeownership rate<br>' },
                    labels: {
                        formatSettings: { sufix: '%' }
                    },
                    flip: false
                },
                seriesGroups:
                    [
                        {
                            type: 'line',
                            series: [
                                { dataField: 'Northeast', displayText: 'NorthEast' },
                                { dataField: 'South' },
                                { dataField: 'Midwest', displayText: 'MidWest' },
                                { dataField: 'West' },
                                { dataField: 'UnitedStates', displayText: 'United States' },
                            ]
                        }
                    ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'tsv',
                datafields: [
                    { name: 'Year' },
                    { name: 'Northeast' },
                    { name: 'South' },
                    { name: 'Midwest' },
                    { name: 'West' },
                    { name: 'UnitedStates' }
                ],
                url: 'us_homeownership_rate.csv'
            };
        },
        methods: {
            bands: function () {
                const recessions =
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
            }
        }
    }
</script>

<style>
</style>