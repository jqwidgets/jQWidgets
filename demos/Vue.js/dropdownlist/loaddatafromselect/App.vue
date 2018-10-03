<template>
    <div>
        <JqxDropDownList ref="myDropDownList" style="float: left"
                         @select="listOnSelect($event)"
                         :width="200" :height="25" :selectedIndex="0">
        </JqxDropDownList>

        <div style="float: left">
            <select ref="select" id="select" style="height: 25px; width: 200px; margin-left: 30px">
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
                <option>The Flat White</option>
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
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDropDownList
        },
        mounted: function () {
            this.$refs.myDropDownList.loadFromSelect('select');
            this.selectElement = this.$refs.select;

            this.selectElement.addEventListener('change', (event) => {
                this.updating = true;
                let index = this.selectElement.selectedIndex;
                this.$refs.myDropDownList.selectIndex(index);
                this.$refs.myDropDownList.ensureVisible(index);
                this.updating = false;
            });
        },
        methods: {
            listOnSelect: function(event) {
                if (event.args && !this.updating) {
                    let index = event.args.item.index;
                    this.selectElement.selectedIndex = index;
                }
            }
        }
    }
</script>

<style>
</style>