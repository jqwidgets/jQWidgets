<template>
    <div>
        <JqxGrid ref="myGrid1"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :autoheight="true" :sortable="true"
                 :rendered="rendered" :selectionmode="'singlecell'">
        </JqxGrid>

        <div style="margin-top: 20px"></div>

        <JqxGrid ref="myGrid2"
                 :width="getWidth" :source="source2" :columns="columns2"
                 :autoheight="true" :selectionmode="'singlecell'">
        </JqxGrid>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxDragDrop from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdragdrop.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'firstname', width: 300 },
                    { text: 'Last Name', dataField: 'lastname', width: 300 },
                    { text: 'Product', dataField: 'productname' }
                ],
                source2: {
                    totalrecords: 10,
                    unboundmode: true,
                    datafields:
                        [
                            { name: 'firstname' },
                            { name: 'lastname' },
                            { name: 'productname' }
                        ]
                },
                columns2: [
                    { text: 'First Name', dataField: 'firstname', width: 300 },
                    { text: 'Last Name', dataField: 'lastname', width: 300 },
                    { text: 'Product', dataField: 'productname' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(100, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' }
                    ],
                datatype: 'array'
            };
        },
        methods: {
            rendered: function (type) {
                // Initialize the DragDrop plug-in. Set it's drop target to the second Grid.
                let options = {
                    revert: true,
                    dragZIndex: 99999,
                    appendTo: 'body',
                    dropAction: 'none',
                    initFeedback: (feedback) => {
                        feedback.height(25);
                    }
                };

                let uglyGridDragDropCells = jqwidgets.createInstance('.jqx-grid-cell', 'jqxDragDrop', options);
                let flattenGridDragDropCells = flatten(uglyGridDragDropCells);

                function flatten(arr) {
                    return arr.reduce((flat, toFlatten) => {
                        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
                    }, []);
                }

                // Add Event Handlers
                for (let i = 0; i < flattenGridDragDropCells.length; i++) {
                    // Disable revert when the dragged cell is over the second Grid.
                    flattenGridDragDropCells[i].addEventHandler('dropTargetEnter', () => {
                        flattenGridDragDropCells[i].revert = false;
                    });

                    // Enable revert when the dragged cell is outside the second Grid.
                    flattenGridDragDropCells[i].addEventHandler('dropTargetLeave', () => {
                        flattenGridDragDropCells[i].revert = true;
                    });

                    // initialize the dragged object.
                    flattenGridDragDropCells[i].addEventHandler('dragStart', (event) => {
                        let value = event.target.innerHTML;
                        let position = jqx.position(event.args);
                        let cell = this.$refs.myGrid1.getcellatposition(position.left, position.top);
                        flattenGridDragDropCells[i].data = { value: value };
                    });

                    // Set the new cell value when the dragged cell is dropped over the second Grid.
                    flattenGridDragDropCells[i].addEventHandler('dragEnd', (event) => {
                        let value = event.target.innerHTML;
                        value = value.slice(0, 37) + value.slice(62);
                        let position = jqx.position(event.args);
                        let cell = this.$refs.myGrid2.getcellatposition(position.left, position.top);
                        if (typeof cell !== 'boolean') {
                            this.$refs.myGrid2.setcellvalue(cell.row, (cell.column).toString(), value);
                        }
                    });
                }
            }
        }
    }
</script>

<style>
</style>