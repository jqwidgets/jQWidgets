<template>
    <div>
        <JqxDropDownList ref="myDropDownList" style="float: left; margin-top: 10px"
                         @select="listOnSelect($event)" @unselect="listOnUnselect($event)"
                         :width="200" :height="25" :source="source" :selectedIndex="0">
        </JqxDropDownList>

        <div style="float: left; margin-left: 20px; margin-top: 10px">
            <div>
                <span>Events:</span>

                <JqxPanel ref="myPanel" :width="200" :height="250"></JqxPanel>

            </div>
        </div>
    </div>
</template>

<script>
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxDropDownList,
            JqxPanel
        },
        data: function () {
            return {
                source: [
                    'Affogato',
                    'Americano',
                    'Bicerin',
                    'Breve',
                    'Café Bombón',
                    'Café au lait',
                    'Caffé Corretto',
                    'Café Crema',
                    'Caffé Latte',
                    'Caffé macchiato',
                    'Café mélange',
                    'Coffee milk',
                    'Cafe mocha',
                    'Cappuccino',
                    'Carajillo',
                    'Cortado',
                    'Cuban espresso',
                    'Espresso',
                    'Eiskaffee',
                    'The Flat White',
                    'Frappuccino',
                    'Galao',
                    'Greek frappé coffee',
                    'Iced Coffee﻿',
                    'Indian filter coffee',
                    'Instant coffee',
                    'Irish coffee',
                    'Liqueur coffee'
                ]
            }
        },
        mounted: function () {
            this.$refs.myPanel.$el.style.border = 'none';
        },
        methods: {
            listOnSelect: function (event) {
                let args = event.args;
                let item = this.$refs.myDropDownList.getItem(args.index);
                if (item != null) {
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
                }
            },
            listOnUnselect: function (event) {
                let args = event.args;
                let item = this.$refs.myDropDownList.getItem(args.index);
                if (item != null) {
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
                }
            }
        }
    }
</script>

<style>
</style>