<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid" @filter="myGridOnFilter($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns" :sortable="true"
                 :filterable="true" :autoshowfiltericon="true" :ready="ready">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div style="width: 200px; float: left; margin-right: 10px">

                <JqxButton @click="clearFiltering()" :height="25"> Remove Filter </JqxButton>

                <JqxCheckBox @change="onFilterBackground($event)" :height="25" :checked="true"> Filter Background </JqxCheckBox>

                <JqxCheckBox @change="onFilterIcon($event)" :height="25"> Show All Filter Icons </JqxCheckBox>

            </div>
            <div style="float: left">
                Event Log:

                <JqxPanel ref="myPanel" :width="300" :height="80"></JqxPanel>

            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxGrid,
            JqxCheckBox,
            JqxButton,
            JqxPanel
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', datafield: 'firstname', filtertype: 'list', width: 160 },
                    { text: 'Last Name', datafield: 'lastname', filtertype: 'list', width: 160 },
                    { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
                    { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };
        },
        methods: {
            addfilter: function () {
                let filtergroup = new jqx.filter();
                let filter_or_operator = 1;
                let filtervalue = 'Andrew';
                let filtercondition = 'equal';
                let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

                filtergroup.addfilter(filter_or_operator, filter1);
                // add the filters.
                this.$refs.myGrid.addfilter('firstname', filtergroup);
                // apply the filters.
                this.$refs.myGrid.applyfilters();
            },
            ready: function () {
                this.addfilter();
            },
            myGridOnFilter: function (event) {
                this.$refs.myPanel.clearcontent();
                let filterinfo = this.$refs.myGrid.getfilterinformation();
                let eventData = 'Triggered "filter" event';
                for (let i = 0; i < filterinfo.length; i++) {
                    let eventData = 'Filter Column: ' + filterinfo[i].filtercolumntext;
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
                }
            },
            clearFiltering: function () {
                this.$refs.myGrid.clearfilters();
            },
            onFilterBackground: function (event) {
                this.$refs.myGrid.showfiltercolumnbackground = event.args.checked;
            },
            onFilterIcon: function (event) {
                this.$refs.myGrid.autoshowfiltericon = !event.args.checked;
            }
        }
    }
</script>

<style>
    .jqx-button {
        width: fit-content;
    }

    .jqx-panel {
        border: none;
    }

    .jqx-checkbox {
        margin-top: 5px;
    }
</style>