<template>
    <div>
        <JqxGrid ref="myGrid" @groupexpand="onGroupExpand($event)" @groupcollapse="onGroupCollapse($event)"
                 :width="getWidth" :groupable="true" :columns="columns"
                 :source="dataAdapter" :groups="['City']">
        </JqxGrid>

        <div style="margin-top: 20px;">
            <div style="float: left; margin-left: 20px;">

                <JqxButton @click="onExpandGroup()" :width="150">Expand Group</JqxButton>
                <br />

                <JqxButton @click="onCollapseGroup()" :width="150">Collapse Group</JqxButton>
                <br />

                <span style="margin-top: 10px;">Group:</span>
                <input ref="groupNum" value="1" style="margin-top: 10px; width: 20px;" type="text" />
            </div>
            <div style="float: left; margin-left: 20px;">

                <JqxButton @click="onExpandAllGroup()" :width="150">Expand All Group</JqxButton>
                <br />

                <JqxButton @click="onCollapseAllGroup()" :width="150">Collapse All Groups</JqxButton>
                <br />

            </div>
            <div style="float: left; margin-left: 20px;">
                <div style="font-weight: bold;">
                    <span>Event Log:</span>
                </div>
                <div style="margin-top: 10px;">
                    <span>Expanded Group:</span>
                    <span ref="expandedGroup"></span>
                </div>
                <div style="margin-top: 10px;">
                    <span>Collapsed Group:</span>
                    <span ref="collapsedGroup"></span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton
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
            };
        },
        methods: {
            onExpandGroup: function () {
                let groupNum = this.$refs.groupNum.value;
                if (!isNaN(groupNum)) {
                    this.$refs.myGrid.expandgroup(groupNum);
                }
            },
            onCollapseGroup: function () {
                let groupNum = this.$refs.groupNum.value;
                if (!isNaN(groupNum)) {
                    this.$refs.myGrid.collapsegroup(groupNum);
                }
            },
            onExpandAllGroup: function () {
                this.$refs.myGrid.expandallgroups();
            },
            onCollapseAllGroup: function () {
                this.$refs.myGrid.collapseallgroups();
            },
            onGroupExpand: function (event) {
                let args = event.args;
                this.$refs.expandedGroup.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
            },
            onGroupCollapse: function (event) {
                let args = event.args;
                this.$refs.collapsedGroup.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
            }
        }
    }
</script>

<style>
</style>