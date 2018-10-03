<template>
    <div>
        <JqxListBox ref="myListBox"
                    @change="change($event)"
                    :source="source"
                    :multiple="true"
                    :width="200"
                    :height="250">
        </JqxListBox>

        <div style="margin-top: 30px; font-size: 13px; font-family: Verdana;" ref="selectionLog"></div>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxListBox
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
        mounted: function () {
            this.$refs.myListBox.selectIndex(2);
            this.$refs.myListBox.selectIndex(5);
            this.$refs.myListBox.selectIndex(7);
        },
        methods: {
            displaySelectedItems: function() {
                let items = this.$refs.myListBox.getSelectedItems();
                let selection = 'Selected Items: ';
                for (let i = 0; i < items.length; i++) {
                    selection += items[i].label + (i < items.length - 1 ? ', ' : '');
                }
                this.$refs.selectionLog.innerHTML = selection;
            },
            change: function (event) {
                this.displaySelectedItems();
            }
        }
    }
</script>

<style>
</style>
