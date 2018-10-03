<template>
    <JqxListBox :allowDrop="true"
                :allowDrag="true"
                :source="data"
                :width="200"
                :height="250">
    </JqxListBox>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxListBox
        },
        data: function () {
            return {
                data:  [
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
                    "Cafe mocha"
                ]
            }
        }
    }
</script>

<style>
</style>
