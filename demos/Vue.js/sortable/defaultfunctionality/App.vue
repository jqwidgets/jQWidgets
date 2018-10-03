<template>
    <JqxSortable ref="mySortable"></JqxSortable>
</template>

<script>
    import JqxSortable from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsortable.vue';

    export default {
        components: {
            JqxSortable
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
</style>