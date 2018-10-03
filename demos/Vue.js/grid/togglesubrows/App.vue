<template>
    <div>
        <JqxGrid ref="myGrid"
                 @groupexpand="myGridOnGroupExpand($event)" @groupcollapse="myGridOnGroupCollapse($event)"
                 :width="850" :source="dataAdapter" :columns="columns"
                 :groupable="true" :groups="['Country','City']">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div style="float: left; margin-left: 20px">

                <JqxButton @click="expandBtnOnClick()" :width="125" :height="20">Expand Group</JqxButton>
                <br />

                <div style="margin-top: 10px; margin-bottom: 10px"></div>
                <JqxButton @click="collapseBtnOnClick()" :width="125" :height="20">Collapse Group</JqxButton>
                <br />

                <div style="margin-top: 10px;">
                    <span>Group:</span>

                    <JqxInput ref="myInput" style="margin-left: 10px; margin-top: 10px" :width="20" :value="'0.0'"></JqxInput>

                </div>

            </div>
            <div style="float: left; margin-left: 20px">

                <JqxButton @click="expandAllBtnOnClick()" :width="125" :height="20">Expand All</JqxButton>
                <br />

                <div style="margin-top: 10px; margin-bottom: 10px"></div>
                <JqxButton @click="collapseAllBtnOnClick()" :width="125" :height="20">Collapse All</JqxButton>
                <br />

            </div>
            <div style="float: left; margin-left: 20px">
                <div style="font-weight: bold">
                    <span>Event Log:</span>
                </div>
                <div style="margin-top: 10px">
                    <span>Expanded Group:</span>
                    <span ref="expandedGroupLog"></span>
                </div>
                <div style="margin-top: 10px">
                    <span>Collapsed Group:</span>
                    <span ref="collapsedGroupLog"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton,
            JqxInput
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                    { text: 'City', datafield: 'City', width: 120 },
                    { text: 'Country', datafield: 'Country' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                    { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: 'customers.xml'
            }
        },
        methods: {
            expandBtnOnClick: function() {
                let groupnum = this.$refs.myInput.val();
                if (!isNaN(groupnum)) {
                    this.$refs.myGrid.expandgroup(groupnum);
                }
            },
            collapseBtnOnClick: function() {
                let groupnum = this.$refs.myInput.val();
                if (!isNaN(groupnum)) {
                    this.$refs.myGrid.collapsegroup(groupnum);
                }
            },
            expandAllBtnOnClick: function() {
                this.$refs.myGrid.expandallgroups();
            },
            collapseAllBtnOnClick: function() {
                this.$refs.myGrid.collapseallgroups();
            },
            myGridOnGroupExpand: function(event) {
                let args = event.args;
                this.$refs.expandedGroupLog.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
            },
            myGridOnGroupCollapse: function(event) {
                let args = event.args;
                this.$refs.collapsedGroupLog.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level
            }
        }
    }
</script>

<style>
    .jqx-button{
        display: inline-block;
        margin-right: 0px;
    }
</style>