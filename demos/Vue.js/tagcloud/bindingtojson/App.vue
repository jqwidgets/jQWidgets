<template>
    <JqxTagCloud ref="myTagCloud"
        :width="600" :source="dataAdapter"
        :displayMember="'name'" :valueMember="'calories'">
    </JqxTagCloud>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';

    export default {
        components: {
            JqxTagCloud
        },
        beforeCreate: function () {
            const source =
                {
                    datatype: 'json',
                    datafields: [
                        { name: 'calories' },
                        { name: 'name' }
                    ],
                    url: 'beverages.txt'
                };

            this.dataAdapter = new jqx.dataAdapter(source);
        }
    }
</script>