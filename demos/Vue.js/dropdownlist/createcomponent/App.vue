<template>
    <JqxDropDownList ref="myDropDownList" :autoCreate="false">
    </JqxDropDownList>
</template>

<script>
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDropDownList
        },
        mounted: function () {
            const source = [
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
            ];

            const settings = { source: source, selectedIndex: 1, width: '200', height: '25' };

            this.$refs.myDropDownList.createComponent(settings);
        }
    }
</script>

<style>
    
</style>