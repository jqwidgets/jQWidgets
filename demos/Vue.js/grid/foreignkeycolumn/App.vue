<template>
    <JqxGrid :width="getWidth" :source="ordersAdapter" :columns="columns"
             :autoheight="true" :pageable="true" :selectionmode="'multiplecellsadvanced'">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                ordersAdapter: new jqx.dataAdapter(this.ordersSource),
                columns: [
                    { text: 'Employee Name', datafield: 'EmployeeID', width: 150 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                    { text: 'Ship Name', datafield: 'ShipName' }
                ]
            }
        },
        beforeCreate: function () {
            const employeesSource = {
                datatype: 'xml',
                datafields: [
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' }
                ],
                root: 'Employees',
                record: 'Employee',
                id: 'EmployeeID',
                async: false,
                url: 'employees.xml'
            };

            const employeesAdapter = new jqx.dataAdapter(employeesSource, {
                autoBind: true,
                beforeLoadComplete: (records) => {
                    let data = new Array();
                    // update the loaded records. Dynamically add EmployeeName and EmployeeID fields.
                    for (let i = 0; i < records.length; i++) {
                        let employee = records[i];
                        employee.EmployeeName = employee.FirstName + ' ' + employee.LastName;
                        employee.EmployeeID = employee.uid;
                        data.push(employee);
                    }
                    return data;
                }
            });

            this.ordersSource = {
                datatype: 'xml',
                datafields: [
                    // name - determines the field's name.
                    // values - specifies the field's values.
                    // values.source - specifies the foreign source. The expected value is an array.
                    // values.name - specifies the field's name in the foreign source.
                    // When the ordersAdapter is loaded, each record will have a field called 'EmployeeID'. The 'EmployeeID' for each record will come from the employeesAdapter where the record's 'EmployeeID' from orders.xml matches to the 'EmployeeID' from employees.xml.
                    { name: 'EmployeeID', map: 'm\\:properties>d\\:EmployeeID', values: { source: employeesAdapter.records, name: 'EmployeeName' } },
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
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };
        }
    }
</script>

<style>
</style>