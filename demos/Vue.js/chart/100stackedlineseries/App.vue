<template>
    <div>
        <JqxChart style="width: 850px; height: 500px"
                  :title="'Web Site Traffic Analysis'" :description="'Monthly unique visitors (percentage stacked)'"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :valueAxis="valueAxis" :colorScheme="'scheme04'" :seriesGroups="seriesGroups">
        </JqxChart>
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

                titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
                padding: { left: 5, top: 5, right: 15, bottom: 5 },
                xAxis:
                    {
                        type: 'date',
                        baseUnit: 'day',
                        textRotationAngle: 0,
                        dataField: 'Date',
                        labels:
                            {
                                formatFunction: (value) => {
                                    return value.getDate();
                                }
                            },
                        toolTipFormatFunction: (value) => {
                            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                        },
                        valuesOnTicks: false,
                        gridLines: { interval: 31 }
                    },
                valueAxis:
                    {
                        title: { text: 'Daily Visits<br>' },
                        labels: { horizontalAlignment: 'right' }
                    },
                seriesGroups:
                    [
                        {
                            type: 'stackedline100',
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

            this.source =
                {
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
    }
</script>

<style>
</style>