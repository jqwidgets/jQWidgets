<template> 
    <JqxComboBox 
        :width="'100%'" :height="35" :source="source" :selectedIndex="0">
    </JqxComboBox>
</template>

    <script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxComboBox,
            JqxPanel
        },
        data: function() {
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
    };
    </script>

<style>
    body, html {
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 3px;
      box-sizing: border-box;
      margin: 0;
    }
</style>