<template>
    <div>
        <JqxPopover :offset="{ left: 0, top: 0 }"
                    :arrowOffsetValue="0"
                    :position="'top'"
                    :title="'Employees'"
                    :showCloseButton="true"
                    :selector="'#container'">
            <div ref="employees"></div>
        </JqxPopover>
        <div style="height: 60px; border-width: 0px; position: absolute; width: 100%; bottom: 0px; border-style: solid; padding-top:10px; padding-bottom: 10px; box-sizing: border-box;" id="header">
            <div class="jqx-widget-header" id="container">
                <JqxButton style="float: left; margin-left: 50%; left: -75px; top: 0px; position: relative; padding: 5px 22px; border-radius: 6px;"
                           :width="150" :height="22">View Employees</JqxButton>
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
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }
</style>