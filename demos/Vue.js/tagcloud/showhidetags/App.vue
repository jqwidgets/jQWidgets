<template>
    <div>
        <JqxTagCloud ref="myTagCloud"
            :width="600" :source="dataAdapter"
            :displayMember="'countryName'" :valueMember="'technologyRating'">
        </JqxTagCloud>

        <br />
        <br />

        <JqxButton :width="100" ref="hideItemBtn" @click="hideItemClickBtn()">Hide Item</JqxButton>
        <JqxButton :width="100" ref="showItemBtn" @click="showItemClickBtn()">Show Item</JqxButton>
    </div>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTagCloud,
            JqxButton
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
        },
        mounted: function () {
            this.$refs.myTagCloud.hideItem(1);
        },
        methods: {
            hideItemClickBtn: function () {
                const myTagCloud = this.$refs.myTagCloud;
                const records = myTagCloud.getTagsList();
                const hiddenTagsList = myTagCloud.getHiddenTagsList();

                for (let i = 0; i < records.length; i++) {
                    if (hiddenTagsList.indexOf(records[i].index) == -1) {
                        myTagCloud.hideItem(records[i].index);
                        return;
                    }
                }
            },
            showItemClickBtn: function () {
                const myTagCloud = this.$refs.myTagCloud;
                const hiddenTagsList = myTagCloud.getHiddenTagsList();

                if (hiddenTagsList[0] !== undefined) {
                    const tagId = hiddenTagsList[0];
                    myTagCloud.showItem(tagId);
                }
            }
        }
    }
</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-right: 10px;
    }
</style>