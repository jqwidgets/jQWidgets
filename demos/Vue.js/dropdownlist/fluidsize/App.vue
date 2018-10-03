<template>
    <JqxDropDownList 
        :width="'100%'" :height="35" :source="source" :selectedIndex="1">
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
        }
    }
</script>

<style>
</style>