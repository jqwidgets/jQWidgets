<template>
    <div style="float: left; width: 500px;">
        <JqxListBox style="margin-left: 20px; margin-top: 10px; float: left;" 
                    ref="myListBox"
                    @select="select($event)"
                    @unselect="unselect($event)"
                    :source="source"
                    :width="200"
                    :height="250">
        </JqxListBox>
        <div style="margin-left: 20px; margin-top: 10px; float: left;">
            <div>
                <span>
                    Events:
                </span>
                <JqxPanel ref="myPanel" :width="200" :height="250">
                </JqxPanel>
            </div>
        </div>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxListBox,
            JqxPanel
        },
        data: function () {
            return {
                source: [
                    "Affogato",
                    "Americano",
                    "Bicerin",
                    "Breve",
                    "Café Bombón",
                    "Café au lait",
                    "Caffé Corretto",
                    "Café Crema",
                    "Caffé Latte",
                    "Caffé macchiato",
                    "Café mélange",
                    "Coffee milk",
                    "Cafe mocha",
                    "Cappuccino",
                    "Carajillo",
                    "Cortado",
                    "Cuban espresso",
                    "Espresso",
                    "Eiskaffee",
                    "The Flat White",
                    "Frappuccino",
                    "Galao",
                    "Greek frappé coffee",
                    "Iced Coffee﻿",
                    "Indian filter coffee",
                    "Instant coffee",
                    "Irish coffee",
                    "Liqueur coffee"
                ]
            }
        },
        methods: {
            select: function(event) {
                let item = this.$refs.myListBox.getItem(event.args.index);
                if (item != null) {
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
                }
            },
            unselect: function (event) {
                let item = this.$refs.myListBox.getItem(event.args.index);
                if (item != null) {
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
                }
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

    .jqx-panel {
        border: none;
    }
</style>
