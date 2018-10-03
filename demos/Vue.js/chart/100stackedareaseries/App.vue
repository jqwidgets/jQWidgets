<template>
    <div>
        <JqxChart style="width: 850px; height: 500px"
                  :title="'Web Traffic Analysis'" :description="'Unique monthly site visitors (percentage stacked)'"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :valueAxis="valueAxis" :colorScheme="'scheme06'" :seriesGroups="seriesGroups">
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
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                xAxis:
                    {
                        type: 'date',
                        baseUnit: 'day',
                        dataField: 'Date',
                        valuesOnTicks: true,
                        labels: {
                            formatFunction: (value) => {
                                return value.getDate();
                            }
                        },
                        gridLines: { visible: false },
                        toolTipFormatFunction: (value) => {
                            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                        }
                    },
                valueAxis:
                    {
                        title: { text: 'Daily visitors' },
                        labels: { horizontalAlignment: 'right' }
                    },
                seriesGroups:
                    [
                        {
                            type: 'stackedarea100',
                            series: [
                                { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' },
                                { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                                { dataField: 'Referral', displayText: 'Referral Traffic' }
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