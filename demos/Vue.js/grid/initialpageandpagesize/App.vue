<template>
    <div>
        <JqxGrid ref="myGrid"
                 @pagechanged="myGridOnPageChanged($event)" @pagesizechanged="myGridOnPageSizeChanged($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :sortable="true" :pageable="true" :autoheight="true"
                 :columnsresize="true" :selectionmode="'multiplerowsextended'">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div style=" float: left">
                Event Log:
                <JqxPanel ref="myPanel" :width="300" :height="180"></JqxPanel>
            </div>
            <div style=" float: left">
                Paging Details:
                <div ref="pagingInfoLog"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxGrid,
            JqxPanel
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
                    { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml',
                pagenum: 3,
                pagesize: 20,
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };
        },
        methods: {
            myGridOnPageChanged: function(event) {
                if (document.getElementsByClassName('logged').length >= 5) {
                    this.$refs.myPanel.clearcontent();
                }

                let args = event.args;
                let eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';

                this.$refs.myPanel.prepend('<div class="logged" style="margin-top: 5px">' + eventData + '</div>');
                // get page information.
                let paginginformation = this.$refs.myGrid.getpaginginformation();
                this.$refs.pagingInfoLog.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' +
                    paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
            },
            myGridOnPageSizeChanged: function(event) {
                this.$refs.myPanel.clearcontent();

                let args = event.args;
                let eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';

                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
                // get page information.
                let paginginformation = this.$refs.myGrid.getpaginginformation();;
                this.$refs.pagingInfoLog.innerHTML = '<div style="margin-top: 5px">Page:' + paginginformation.pagenum + ', Page Size: ' +
                    paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
            }
        }
    }
</script>

<style>
    .jqx-panel{
        border: none;
    }
</style>