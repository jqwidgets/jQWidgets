<template>
    <div>
        <div>The value is: {{ item }}</div><br />

        <JqxDropDownList v-model="item" :width="200" :height="25" :source="source" :selectedIndex="0" />
    </div>
</template>

<script>
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxDropDownList
        },
        data: function () {
            return {
                item: 'Affogato',
                source: [
                    'Affogato',
                    'Americano',
                    'Bicerin',
                    'Breve',
                    'Cafe Bombon',
                    'Cafe au lait',
                    'Cafe mocha',
                    'Cappuccino',
                    'Carajillo',
                    'Iced Coffee',
                    'Instant coffee',
                    'Irish coffee',
                    'Liqueur coffee'
                ]
            }
        }
    }
</script>