<template>
    <div>
        <JqxComboBox ref="myComboBox" style="float: left; margin-top: 100px;"
                     @select="onSelect($event)" @unselect="onUnselect($event)"
                     :width="200" :height="25" :source="source">
        </JqxComboBox>

        <div style="float: left; font-size: 12px; font-family: Verdana; margin-left: 20px; margin-top: 100px;">
            <span>Events:</span>

            <JqxPanel ref="myPanel"
                      :width="200" :height="250">
            </JqxPanel>
        </div>
    </div>
</template>

<script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxComboBox,
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
        methods: {
            onSelect: function (event) {
                let args = event.args;
                if (args != undefined) {
                    let item = event.args.item;
                    if (item != null) {
                        this.$refs.myPanel.prepend(`<div style="margin-top: 5px;">Selected: ${item.label}</div>`);
                    }
                }
            },
            onUnselect: function (event) {
                let args = event.args;
                if (args != undefined) {
                    let item = event.args.item;
                    if (item != null) {
                        this.$refs.myPanel.prepend(`<div style="margin-top: 5px;">Unselected: ${item.label}</div>`);
                    }
                }
            }
        }
    };
</script>

<style>
    .jqx-panel {
        border: none !important;
    }
</style>