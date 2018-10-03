<template>
    <div>
        <div>The value is: {{ item }}</div><br />

        <JqxListBox v-model="item" :width="200" :height="250" :source="source" :selectedIndex="0" />
    </div>
</template>

<script>
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';

    export default {
        components: {
            JqxListBox
        },
        data: function () {
            return {
                item: 'Affogato'
            }
        },
        beforeCreate: function () {
            this.source =
            [
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
            ];
        }
    }
</script>