<template>
    <div>
        <p>This demo demonstrates how to add a tag in first position or update/remove the tag in first position.</p>

        <JqxTagCloud ref="myTagCloud"
            :width="600" :source="dataAdapter" :urlBase="'http://localhost/'"
            :displayMember="'productname'" :valueMember="'price'"
            :fontSizeUnit="'px'" :minFontSize="12" :maxFontSize="20"
            :minColor="'#00AA99'" :maxColor="'#FF0000'">
        </JqxTagCloud>

        <br />
        <br />

        <JqxButton :width="120" @click="addItemBtnOnClick()">Add Item</JqxButton>
        <JqxButton :width="120" @click="deleteItemBtnOnClick()">Delete First Item</JqxButton>
        <JqxButton :width="120" @click="updateItemBtnOnClick()">Update First Item</JqxButton>
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
            const data = generatedata(50);

            const source = 
                {
                    datatype: 'array',
                    localdata: data,
                    datafields: [
                        { name: 'productname' },
                        { name: 'price' }
                    ]
                };

            this.dataAdapter = new jqx.dataAdapter(source);
        },
        methods: {
            addItemBtnOnClick: function () {
                const row = generatedata(1)[0];
                this.$refs.myTagCloud.insertAt(0, row);
            },
            deleteItemBtnOnClick: function () {
                this.$refs.myTagCloud.removeAt(0);
            },
            updateItemBtnOnClick: function () {
                const row = generatedata(1)[0];
                this.$refs.myTagCloud.updateAt(0, row);
            }
        }
    }
</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-left: 10px;
        user-select: none;
    }
</style>