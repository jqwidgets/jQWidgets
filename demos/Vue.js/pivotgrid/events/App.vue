<template>
    <div>
        <JqxPivotGrid style="width: 800px; height: 400px;"
                      ref="pivotGrid"
                      :source="pivotDataSource"
                      :treeStyleRows="true"
                      :autoResize="false"
                      :multipleSelectionEnabled="true"

                      @pivotitemexpanding="eventHandler1($event)"
                      @pivotitemcollapsing="eventHandler1($event)"
                      @pivotitemexpanded="eventHandler1($event)"
                      @pivotitemcollapsed="eventHandler1($event)"
                      @pivotitemselectionchanged="eventHandler1($event)"
                      @sortchanging="eventHandler1($event)"
                      @sortchanged="eventHandler1($event)"
                      @sortremoving="eventHandler1($event)"
                      @sortremoved="eventHandler1($event)"

                      @pivotitemmouseup="eventHandler2($event)"
                      @pivotitemmousedown="eventHandler2($event)"
                      @pivotitemclick="eventHandler2($event)"
                      @pivotitemdblclick="eventHandler2($event)"

                      @pivotcellmouseup="eventHandler3($event)"
                      @pivotcellmousedown="eventHandler3($event)"
                      @pivotcellclick="eventHandler3($event)"
                      @pivotcelldblclick="eventHandler3($event)">
        </JqxPivotGrid>
        <br />
        <JqxTextArea ref="eventsLog"
                     :width="800"
                     :height="100">
        </JqxTextArea>
        <br />
        <JqxButton :width="90" @click="onClearLog()">Clear Log</JqxButton>
    </div>
</template>

<script>
    import JqxPivotGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpivotgrid.vue';
    import JqxTextArea from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtextarea.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxPivotGrid,
            JqxTextArea,
            JqxButton
        },
        data: function () {
            return {
                pivotDataSource: this.pivotDataSource
            }
        },
        beforeCreate: function () {

            const createPivotDataSource = () => {
                // prepare sample data
                let data = new Array();

                let firstNames =
                    [
                        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
                    ];

                let lastNames =
                    [
                        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
                    ];

                let productNames =
                    [
                        "Black Tea", "Green Tea", "Caffe Espresso"
                    ];

                let priceValues =
                    [
                        "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
                    ];

                for (let i = 0; i < 500; i++) {
                    let row = {};
                    let productindex = Math.floor(Math.random() * productNames.length);
                    let price = parseFloat(priceValues[productindex]);
                    let quantity = 1 + Math.round(Math.random() * 10);

                    row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
                    row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
                    row["productname"] = productNames[productindex];
                    row["price"] = price;
                    row["quantity"] = quantity;
                    row["total"] = price * quantity;

                    data[i] = row;
                }

                // create a data source and data adapter
                let source =
                    {
                        localdata: data,
                        datatype: "array",
                        datafields:
                            [
                                { name: 'firstname', type: 'string' },
                                { name: 'lastname', type: 'string' },
                                { name: 'productname', type: 'string' },
                                { name: 'quantity', type: 'number' },
                                { name: 'price', type: 'number' },
                                { name: 'total', type: 'number' }
                            ]
                    };

                let dataAdapter = new jqx.dataAdapter(source);
                dataAdapter.dataBind();

                // create a pivot data source from the dataAdapter
                let pivotDataSource = new jqx.pivot(
                    dataAdapter,
                    {
                        pivotValuesOnRows: false,
                        totals: { rows: { subtotals: true, grandtotals: true }, columns: { subtotals: false, grandtotals: true } },
                        rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
                        columns: [{ dataField: 'productname' }],
                        values: [
                            { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
                            { dataField: 'price', 'function': 'count', text: 'count' },
                            { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
                        ]
                    }
                );

                return pivotDataSource;       
            };

            this.pivotDataSource = createPivotDataSource();
        },
        methods: {
            eventHandler1: function(event) {
                var args = event.args;
                var t = new Date();
                var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

                var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + args.pivotItem.text;
                if (event.type == 'itemselectionchanged')
                    eventData += ', Selected: ' + args.selected;

                eventData += "\r\n";
                this.$refs.eventsLog.val(eventData + this.$refs.eventsLog.val());
            },
            eventHandler2: function (event) {
                var t = new Date();
                var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

                var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;

                eventData += "\r\n";
                this.$refs.eventsLog.val(eventData + this.$refs.eventsLog.val());
            },
            eventHandler3: function (event) {
                var t = new Date();
                var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

                var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;

                eventData += "\r\n";
                this.$refs.eventsLog.val(eventData + this.$refs.eventsLog.val());
            },
            onClearLog: function() {
                this.$refs.eventsLog.val("");
            }
        }
    }
</script>