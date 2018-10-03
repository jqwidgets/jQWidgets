<template>
    <div>
        <div style="float: left;">
            <JqxListBox ref="myListBox"
                        @select="selectItem($event)"
                        :width="200"
                        :height="250">
            </JqxListBox>
        </div>

        <div style="float: left;">
            <select style="height: 250px; width: 200px; margin-left: 30px;" size="2" id="select" ref="select" @change="change($event)">
                <option>Affogato</option>
                <option>Americano</option>
                <option>Bicerin</option>
                <option>Breve</option>
                <option>Café Bombón</option>
                <option>Caffé Corretto</option>
                <option>Café Crema</option>
                <option>Caffé Latte</option>
                <option>Caffé macchiato</option>
                <option>Café mélange</option>
                <option>Coffee milk</option>
                <option>Cafe mocha</option>
                <option>Cappuccino</option>
                <option>Carajillo</option>
                <option>Cuban espresso</option>
                <option>Espresso</option>
                <option selected="selected">The Flat White</option>
                <option>Frappuccino</option>
                <option>Galao</option>
                <option>Greek frappé coffee</option>
                <option>Iced Coffee﻿</option>
                <option>Indian filter coffee</option>
                <option>Instant coffee</option>
                <option>Irish coffee</option>
                <option>Liqueur coffee</option>
            </select>
        </div>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxListBox
        },      
        beforeCreate: function () {
            this.updating = false;
        },
        mounted: function () {
            this.$refs.myListBox.loadFromSelect('select');
        },
        methods: {
            change: function(event) {
                this.updating = true;
                let index = this.$refs.select.selectedIndex;
                this.$refs.myListBox.selectIndex(index);
                this.$refs.myListBox.ensureVisible(index);
                this.updating = false;
            },
            selectItem: function (event) {
                if (event.args && !this.updating) {
                    // select the item in the 'select' tag.
                    let index = event.args.item.index;
                    this.$refs.select.selectedIndex = index;
                }
            }
        }
    }
</script>

<style>
</style>
