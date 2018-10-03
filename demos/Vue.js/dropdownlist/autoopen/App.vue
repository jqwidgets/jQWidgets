<template>
    <JqxDropDownList 
        :width="200" :height="25" :source="source" :selectedIndex="1" :autoOpen="true">
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
                    'Cafe Bombon',
                    'Cafe au lait',
                    'Caffe Corretto',
                    'Cafe Crema',
                    'Caffe Latte',
                    'Caffe macchiato',
                    'Cafe melange',
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
                    'Greek frappe coffee',
                    'Iced Coffee',
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
    
</style>