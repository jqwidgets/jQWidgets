<template>
    <JqxDropDownList :width="280" :height="30" :source="shirts" :selectedIndex="0" :itemHeight="90"
                     :filterable="true" :renderer="renderer" :selectionRenderer="selectionRenderer">
    </JqxDropDownList>
</template>

<script>
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDropDownList
        },
        data: function () {
            return {
                shirts: [
                    "2 sided dodgers\nbankrupt\nt shirt ash", "black retro\nrock band\nguitar controller",
                    "bright green\ngettin lucky\nin kentucky", "brown loading\nbar computer geek", "cool story bro",
                    "fear the beard", "honey badger\ndon t care", "misfits sf\ngiants white", "scott pilgrim\nred rock\nband"
                ]
            }
        },
        beforeCreate: function () {
            this.shirtFileNames = [
                "2-sided-dodgers-bankrupt-t-shirt-ash", "black-retro-rock-band-guitar-controller",
                "bright-green-gettin-lucky-in-kentucky", "brown-loading-bar-computer-geek", "cool-story-bro",
                "fear-the-beard", "honey-badger-don-t-care", "misfits-sf-giants-white", "scott-pilgrim-red-rock-band"
            ];
        },
        methods: {
            renderer: function (index, label, value) {
                let datarecord = this.shirtFileNames[index];
                let imgurl = '../../../images/t-shirts/' + datarecord.toLowerCase() + '.png';
                let img = '<img height="70" width="70" src="' + imgurl + '"/>';
                let table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
                return table;
            },
            selectionRenderer: function (element, index, label, value) {
                let text = label.replace(/\n/g, " ");
                return '<span style="left: 4px; top: 6px; position: relative;">' + text + '</span>';
            }
        }
    }
</script>

<style>
</style>