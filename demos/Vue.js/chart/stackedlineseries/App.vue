<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Web Site Traffic Analysis'"
              :description="'Daily unique visitors (stacked)'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
    </JqxChart>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source + '" : ' + error); } }),
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    type: 'date',
                    baseUnit: 'day',
                    valuesOnTicks: false,
                    labels:
                        {
                            formatFunction: (value) => {
                                return value.getDate();
                            }
                        },
                    toolTipFormatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    }
                },
                valueAxis: {
                    unitInterval: 500,
                    minValue: 0,
                    maxValue: 4500,
                    labels: { horizontalAlignment: 'right' },
                    title: { text: 'Daily Visits<br>' }
                },
                seriesGroups: [
                    {
                        type: 'stackedline',
                        series: [
                            { dataField: 'Referral', displayText: 'Referral Traffic' },
                            { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                            { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            this.source = {
                datatype: 'tab',
                datafields: [
                    { name: 'Date' },
                    { name: 'Referral' },
                    { name: 'SearchPaid' },
                    { name: 'SearchNonPaid' }
                ],
                url: 'website_analytics.txt'
            };
        }
    };
</script>

<style>
</style>