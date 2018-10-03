<template>
    <div>
        <JqxSortable ref="mySortable"
             @activate="eventLog($event)"
             @beforeStop="eventLog($event)"
             @change="eventLog($event)"
             @deactivate="eventLog($event)"
             @out="eventLog($event)"
             @over="eventLog($event)"
             @receive="eventLog($event)"
             @remove="eventLog($event)"
             @start="eventLog($event)"
             @stop="eventLog($event)"
             @update="eventLog($event)"
             @create="eventLog($event)"
             :opacity="0.5">
        </JqxSortable>

        <span>Events:</span>
        <JqxPanel ref="myPanel" :width="200" :height="330"></JqxPanel>
    </div>
</template>

<script>
    import JqxSortable from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsortable.vue';
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';

    export default {
        components: {
            JqxSortable,
            JqxPanel
        },
        data: function () {
            return {
                firstNames: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'],
                lastNames: ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan'],
                titles: ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager']
            }
        },
        mounted: function () {
            this.loadInfo();
        },
        methods: {
            loadInfo: function () { 
                for (let i = 0; i < this.firstNames.length; i++) {
                    const element = document.createElement('div');
                    const imgurl = '../../../images/' + this.firstNames[i].toLowerCase() + '.png';
                    const img = '<img height="50" width="40" src="' + imgurl + '"/>';
                    element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + this.firstNames[i] + ' ' + this.lastNames[i] + '</td></tr><tr><td>' + this.titles[i] + '</td></tr></table>';
                    this.$refs.mySortable.$el.appendChild(element);
                }   
            },
            eventLog: function (event) {
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + event.type + '</div>');
            }
        }
    }
</script>

<style>
    .jqx-sortable {
        margin: 2px;
        padding: 5px;
        float: left;
        width: 200px;
        border: lightblue solid 1px;
        margin-right: 30px;
    }

    .jqx-sortable > div {
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        background-color: white;
        color: black;
        border: 1px solid transparent;
    }

    .jqx-sortable div:hover {
        border: 1px solid #356AA0;
    }

    .jqx-panel {
        margin-top: 20px;
        border: none !important;
    }

    span {
        font-weight: bold;
    }
</style>