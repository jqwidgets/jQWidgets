<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid" @filter="myGridOnFilter($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns" :ready="ready"
                 :sortable="true" :filterable="true" :autoshowfiltericon="true"
                 :updatefilterconditions="updatefilterconditions" :updatefilterpanel="updatefilterpanel">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div style="width: 200px; float: left; margin-right: 10px">

                <JqxButton @click="clearFilteringBtnOnClick()" :height="22">Remove Filter</JqxButton>

                <JqxCheckBox @change="filterBackgroundOnChange($event)" :height="25" :checked="true">Filter Background</JqxCheckBox>

                <JqxCheckBox @change="filterIconsOnChange($event)" :height="25">Show All Filter Icons</JqxCheckBox>

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
                    { text: 'First Name', datafield: 'firstname', width: 200 },
                    { text: 'Last Name', datafield: 'lastname', width: 200 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Order Date', datafield: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                    { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' }
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
                let filtervalue = 'Beate';
                let filtercondition = 'contains';
                let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                filtervalue = 'Andrew';
                filtercondition = 'contains';
                let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                filtergroup.addfilter(filter_or_operator, filter1);
                filtergroup.addfilter(filter_or_operator, filter2);
                // add the filters.
                this.$refs.myGrid.addfilter('firstname', filtergroup);
                // apply the filters.
                this.$refs.myGrid.applyfilters();
            },
            updatefilterconditions: function (type, defaultconditions) {
                let stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
                let numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
                let datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
                let booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
                switch (type) {
                    case 'stringfilter':
                        return stringcomparisonoperators;
                    case 'numericfilter':
                        return numericcomparisonoperators;
                    case 'datefilter':
                        return datecomparisonoperators;
                    case 'booleanfilter':
                        return booleancomparisonoperators;
                }
            },
            updatefilterpanel: function (filtertypedropdown1, filtertypedropdown2, filteroperatordropdown, filterinputfield1,
                filterinputfield2, filterbutton, clearbutton, columnfilter, filtertype, filterconditions) {
                let index1 = 0;
                let index2 = 0;
                if (columnfilter != null) {
                    let filter1 = columnfilter.getfilterat(0);
                    let filter2 = columnfilter.getfilterat(1);
                    if (filter1) {
                        index1 = filterconditions.indexOf(filter1.comparisonoperator);
                        let value1 = filter1.filtervalue;
                        filterinputfield1.val(value1);
                    }
                    if (filter2) {
                        index2 = filterconditions.indexOf(filter2.comparisonoperator);
                        let value2 = filter2.filtervalue;
                        filterinputfield2.val(value2);
                    }
                }
                filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
                filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
            },
            ready: function () {
                this.addfilter();
                let localizationObject = {
                    filterstringcomparisonoperators: ['contains', 'does not contain'],
                    // filter numeric comparison operators.
                    filternumericcomparisonoperators: ['less than', 'greater than'],
                    // filter date comparison operators.
                    filterdatecomparisonoperators: ['less than', 'greater than'],
                    // filter bool comparison operators.
                    filterbooleancomparisonoperators: ['equal', 'not equal']
                }
                this.$refs.myGrid.localizestrings(localizationObject);
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
            clearFilteringBtnOnClick: function () {
                this.$refs.myGrid.clearfilters();
            },
            filterBackgroundOnChange: function (event) {
                this.$refs.myGrid.showfiltercolumnbackground = event.args.checked;
            },
            filterIconsOnChange: function (event) {
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