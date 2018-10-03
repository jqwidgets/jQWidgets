<template>
    <div>
        <div id="outerBox1">
            <h2>Team 1</h2>
            <div id="kanbanBox1">

                <JqxKanban :width="400" :height="400" :columns="kanbanColumns" :resources="staff"
                           :source="kanbanSourceConnected1" :connectWith="'#kanbanBox2'">
                </JqxKanban>

            </div>
        </div>

        <div id="outerBox2">
            <h2>Team 2</h2>
            <div id="kanbanBox2">

                <JqxKanban :width="400" :height="400" :columns="kanbanColumns" :resources="staff"
                           :source="kanbanSourceConnected2" :connectWith="'#kanbanBox1'">
                </JqxKanban>

            </div>
        </div>
    </div>
</template>
<script>
    import JqxKanban from "jqwidgets-scripts/jqwidgets-vue/vue_jqxkanban.vue";

    export default {
        components: {
            JqxKanban
        },
        data: function () {
            return {
                getWidth: '90%',
                staff: [
                    { id: 0, name: 'No name', image: '../../../images/common.png', common: true },
                    { id: 1, name: 'Andrew Fuller', image: '../../../images/andrew.png' },
                    { id: 2, name: 'Janet Leverling', image: '../../../images/janet.png' },
                    { id: 3, name: 'Steven Buchanan', image: '../../../images/steven.png' }
                ],
                kanbanColumns: [
                    { text: 'Backlog', dataField: 'new', access: 'none', maxItems: 5 },
                    { text: 'In Progress', dataField: 'work', access: 'none', maxItems: 5 },
                    { text: 'Done', dataField: 'done', access: 'none', maxItems: 5, collapseDirection: 'right' }
                ],
                kanbanSourceConnected1: [
                    { id: 3, status: 'done', text: 'Combine Orders', tags: 'orders, combine', color: '#5dc3f0', resourceId: 3 },
                    { id: 4, status: 'work', text: 'Change Billing Address', tags: 'billing', color: '#6bbd49', resourceId: 1 },
                    { id: 5, status: 'new', text: 'One item added to the cart', tags: 'cart', color: '#5dc3f0', resourceId: 3 },
                    { id: 6, status: 'work', text: 'Login 404 issue', tags: 'issue, login', color: '#6bbd49' }
                ],
                kanbanSourceConnected2: [
                    { id: 0, status: 'new', text: 'State opened does not contain items', tags: 'state, open', color: '#5dc3f0', resourceId: 1 },
                    { id: 1, status: 'done', text: 'Patch #2043', tags: 'patch', color: '#6bbd49', personId: 2 },
                    { id: 2, status: 'work', text: 'Change payment method', tags: 'payment', color: '#6bbd49', resourceId: 2 }
                ]
            }
        }
    }
</script>

<style>
    #kanbanBox1 {
        width: 400px;
        height: 400px;
        float: left;
        padding: 2px;
    }

    #kanbanBox2 {
        width: 400px;
        height: 400px;
        float: left;
        padding: 2px;
    }

    #outerBox1 {
        float: left;
        padding: 5px;
        margin: 2px;
        background-color: #6bbd49;
        color: #fff;
    }

    #outerBox2 {
        color: #fff;
        float: left;
        padding: 5px;
        margin: 2px;
        background-color: #5dc3f0;
    }
</style>
