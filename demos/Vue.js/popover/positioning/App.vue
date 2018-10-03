<template>
    <div>
        <JqxPopover :offset="{ left: 0, top: -125 }"
                    :arrowOffsetValue="-240"
                    :position="'left'"
                    :title="'Employees'"
                    :showCloseButton="true"
                    :selector="'#container'">
            <div ref="employees"></div>
        </JqxPopover>
        <div style="padding: 5px;">
            <div id="container" class="jqx-widget-header">
                <JqxButton :width="100" :height="35">View Employees</JqxButton>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxPopover from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpopover.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxPopover,
            JqxButton
        },
        mounted: function () {
            let data = new Array();
            let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
            let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
            let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];

            for (let i = 0; i < firstNames.length; i++) {
                let row = {};
                row['firstname'] = firstNames[i];
                row['lastname'] = lastNames[i];
                row['title'] = titles[i];
                let imgurl = '../../../images/' + firstNames[i].toLowerCase() + '.png';
                let img = '<img height="50" width="45" src="' + imgurl + '"/>';
                let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
                this.$refs.employees.innerHTML += table;
            }
        }
    }
</script>

<style>
    #container {
        height: 800px;
        width: 140px;
        float: right;
        margin-top: 30px;
        border-width: 1px;
        border-style: solid;
        padding: 10px;
    }

    .jqx-button {
        margin: auto;
    }
</style>