<template>
    <div>
        <JqxListBox ref="myListBox"
                    @checkChange="checkChange($event)"
                    :source="source"
                    :checkboxes="true"
                    :width="200"
                    :height="250">
        </JqxListBox>

        <div style="font-size: 13px; font-family: Verdana; margin-top: 20px;" ref="events"></div>
        <div style="font-size: 13px; font-family: Verdana; margin-top: 10px;" ref="checkedItems"></div>
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
        mounted: function() {
            this.$refs.myListBox.checkIndex(0);
            this.$refs.myListBox.checkIndex(1);
            this.$refs.myListBox.checkIndex(2);
            this.$refs.myListBox.checkIndex(5);
        },
        methods: {
            checkChange: function(event) {
                let eventsContainer = this.$refs.events;
                let checkedItemsContainer = this.$refs.checkedItems;

                if (event.args.checked) {
                    eventsContainer.innerHTML = 'Checked: ' + event.args.label;
                }
                else {
                    eventsContainer.innerHTML = 'Unchecked: ' + event.args.label;
                }

                let items = this.$refs.myListBox.getCheckedItems();
                let checkedItems = '';
                for (let i = 0; i < items.length; i++) {
                    if (i < items.length - 1) {
                        checkedItems += items[i].label + ', ';
                    }
                    else checkedItems += items[i].label;
                }

                checkedItemsContainer.innerHTML = checkedItems;
            }
        }
    }
</script>

<style>
</style>
