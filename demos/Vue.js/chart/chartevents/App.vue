<template>
    <div>
        <div style="width: 850px; height: 500px" @mouseleave="chartEvent($event)" @mouseenter="chartEvent($event)">
            <JqxChart style="width: 850px; height: 500px"
                      @click="chartEvent($event)" @toggle="chartEvent($event)"
                      :title="'Fitness & exercise weekly scorecard'"
                      :description="'Time spent in vigorous exercise'"
                      :showToolTip="false" :enableAnimations="true" :padding="padding"
                      :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                      :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
            </JqxChart>
        </div>

        <div ref="eventText" style="width: 600px; height: 30px"></div>
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
                sampleData: [
                    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
                    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
                    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
                    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
                    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
                    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
                    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    type: 'basic'
                },
                seriesGroups:
                    [
                        {
                            type: 'column',
                            valueAxis:
                                {
                                    minValue: 0,
                                    maxValue: 100,
                                    unitInterval: 10,
                                    title: { text: 'Time in minutes' }
                                },
                            series: [
                                { dataField: 'Keith', displayText: 'Keith' },
                                { dataField: 'Erica', displayText: 'Erica' },
                                { dataField: 'George', displayText: 'George' }
                            ]
                        }
                    ]
            }
        },
        methods: {
            chartEvent: function (event) {
                let eventData;
                if (event) {
                    if (event.args) {
                        if (event.type == 'toggle') {
                            eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, visible: </b>' + event.args.state + '</div>';
                            return;
                        }
                        eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, Value: </b>' + event.args.elementValue + '</div>';
                    } else {
                        eventData = '<div><b>Last Event: </b>' + event.type + '';
                    }

                    this.$refs.eventText.innerHTML = eventData;
                }
            }
        }
    }
</script>

<style>
</style>