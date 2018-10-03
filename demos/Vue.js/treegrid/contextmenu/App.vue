<template>
    <div>
        <JqxTreeGrid ref="myTreeGrid"
                     @contextmenu="myTreeGridOnContextmenu()" 
                     @rowClick="myTreeGridOnRowClick($event)"
                     :width="getWidth" 
                     :source="dataAdapter" 
                     :columns="columns" 
                     :columnsResize="true" 
                     :ready="ready">
        </JqxTreeGrid>

        <JqxMenu ref="myMenu" 
                 @itemclick="myMenuOnItemClick($event)"
                 :width="200" 
                 :height="58" 
                 :autoOpenPopup="false" 
                 :mode="'popup'">
            <ul>
                <li>Edit Selected Row</li>
                <li>Delete Selected Row</li>
            </ul>
        </JqxMenu>
    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxMenu from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxmenu.vue';

    export default {
        components: {
            JqxTreeGrid,
            JqxMenu
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
                    { text: 'LastName', dataField: 'LastName', width: 200 },
                    { text: 'Department Name', dataField: 'DepartmentName', width: 200 },
                    { text: 'Title', dataField: 'Title', width: 300 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
                    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
                    { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
                ]
            }
        },
        beforeCreate: function () {
          
            this.source = {
                dataType: 'csv',
                dataFields: [
                    { name: 'EmployeeKey', type: 'number' },
                    { name: 'ParentEmployeeKey', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'HireDate', type: 'date' },
                    { name: 'BirthDate', type: 'date' },
                    { name: 'Phone', type: 'string' },
                    { name: 'Gender', type: 'string' },
                    { name: 'DepartmentName', type: 'string' }
                ],
                hierarchy:
                    {
                        keyDataField: { name: 'EmployeeKey' },
                        parentDataField: { name: 'ParentEmployeeKey' }
                    },
                id: 'EmployeeKey',
                url: 'employeesadv.csv'
            };
        },
        methods: {
            ready: function () {
                this.$refs.myTreeGrid.expandRow(32);
                document.addEventListener('contextmenu', event => event.preventDefault());
            },
            myTreeGridOnContextmenu: function () {
                return false;
            },
            myTreeGridOnRowClick: function(event) {
                let args = event.args;
                if (args.originalEvent.button == 2) {
                    let scrollTop = window.scrollX;
                    let scrollLeft = window.scrollY;
                    this.$refs.myMenu.open(parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
                    return false;
                }
            },
            myMenuOnItemClick: function(event) {
                let args = event.args;
                let selection = this.$refs.myTreeGrid.getSelection();
                let rowid = selection[0].uid;
                if (args.innerHTML == 'Edit Selected Row') {
                    this.$refs.myTreeGrid.beginRowEdit(rowid);
                } else {
                    this.$refs.myTreeGrid.deleteRow(rowid);
                }
            }
        }
    }
</script>

<style>
</style>