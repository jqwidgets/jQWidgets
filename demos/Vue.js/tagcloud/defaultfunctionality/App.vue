<template>
    <JqxTagCloud 
        :width="600" :source="dataAdapter" 
        :displayMember="'countryName'" :valueMember="'technologyRating'">
    </JqxTagCloud>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';

    export default {
        components: {
            JqxTagCloud
        },
        beforeCreate: function () {
            const data =
                [
                    { countryName: 'Australia', technologyRating: 35 },
                    { countryName: 'United States', technologyRating: 60 },
                    { countryName: 'Germany', technologyRating: 55 },
                    { countryName: 'Brasil', technologyRating: 20 },
                    { countryName: 'United Kingdom', technologyRating: 50 },
                    { countryName: 'Japan', technologyRating: 80 }
                ];

            const source = 
                {
                    localdata: data,
                    datatype: 'array',
                    datafields: [
                        { name: 'countryName' },
                        { name: 'technologyRating' }
                    ]
                };

            this.dataAdapter = new jqx.dataAdapter(source);
        }
    }
</script>