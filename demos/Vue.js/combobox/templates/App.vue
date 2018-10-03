<template>
    <div>
        <div>Default</div>
        <JqxComboBox :width="200" :height="25" :source="source" :selectedIndex="1">
        </JqxComboBox>
        <br />

        <div>Primary</div>
        <JqxComboBox :width="200" :height="25" :source="source"
                     :selectedIndex="1" :template="'primary'">
        </JqxComboBox>
        <br />

        <div>Success</div>
        <JqxComboBox :width="200" :height="25" :source="source"
                     :selectedIndex="1" :template="'success'">
        </JqxComboBox>
        <br />

        <div>Info</div>
        <JqxComboBox :width="200" :height="25" :source="source"
                     :selectedIndex="1" :template="'info'">
        </JqxComboBox>
        <br />

        <div>Warning</div>
        <JqxComboBox :width="200" :height="25" :source="source"
                     :selectedIndex="1" :template="'warning'">
        </JqxComboBox>
        <br />

        <div>Danger</div>
        <JqxComboBox :width="200" :height="25" :source="source"
                     :selectedIndex="1" :template="'danger'">
        </JqxComboBox>
    </div>
</template>

<script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";

    export default {
        components: {
            JqxComboBox
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