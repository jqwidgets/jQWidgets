<template>
    <div>
        <JqxPopover ref="popover" :showCloseButton="true" :selector="'.my-button'" :title="'Employees'"
                    :arrowOffsetValue="50" :offset="{ left: left, top: top }" :rtl="true">
            <div ref="employees"></div>
        </JqxPopover>

        <div style="height: 33px; border-width: 1px; border-style: solid; padding: 10px;" class="jqx-widget-header">
            <JqxButton ref="myButton" style="float: right" class="my-button" 
                       :width="150" :height="22" :template="'inverse'">
                View Employees
            </JqxButton>
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
        data: function () {
            return {
                left: 0,
                top: 0
            }
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
</style>