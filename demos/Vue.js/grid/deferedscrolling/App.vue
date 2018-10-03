<template>
    <JqxGrid :width="getWidth" :height="380" :source="dataAdapter" :columns="columns"
             :altrows="true" :sortable="true" :rowsheight="115"
             :scrollmode="'deferred'" :scrollfeedback="scrollfeedback">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'Image', datafield: 'pic', width: 115,
                        cellsrenderer: (row, column, value) => {
                            return '<img src="../../../images/t-shirts/' + value + '"/>';
                        }
                    },
                    { text: 'Title', datafield: 'label', width: 250 },
                    { text: 'Price', cellsformat: 'c2', datafield: 'price' }
                ]
            }
        },
        beforeCreate: function () {

            const products = [
                {
                    label: 'Retro Rock T-shirt',
                    pic: 'black-retro-rock-band-guitar-controller.png',
                    price: 15
                },
                {
                    label: 'Lucky T-shirt',
                    pic: 'bright-green-gettin-lucky-in-kentucky.png',
                    price: 18
                },
                {
                    label: 'Loading T-shirt',
                    pic: 'brown-loading-bar-computer-geek.png',
                    price: 25
                },
                {
                    label: 'Cool Story T-shirt',
                    pic: 'cool-story-bro.png',
                    price: 20
                },
                {
                    label: 'The beard T-shirt',
                    pic: 'fear-the-beard.png',
                    price: 17
                },
                {
                    label: 'Don\'t care T-shirt',
                    pic: 'honey-badger-don-t-care.png',
                    price: 19
                },
                {
                    label: 'Guitar T-shirt',
                    pic: 'scott-pilgrim-red-rock-band.png',
                    price: 24
                },
                {
                    label: 'Dodgers T-shirt',
                    pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
                    price: 21
                },
                {
                    label: 'Misfits T-shirt',
                    pic: 'misfits-sf-giants-white.png',
                    price: 21
                }
            ];

            this.source = {
                datatype: 'array',
                datafields: [
                    { name: 'label', type: 'string' },
                    { name: 'pic', type: 'string' },
                    { name: 'price', type: 'number' }
                ],
                localdata: products
            };
        },
        methods: {
            scrollfeedback: function (row) {
                return '<table style="height: 150px;"><tr><td><img src="../../../images/t-shirts/' + row.pic + '"/></td></tr><tr><td>' + row.label + '</td></tr></table>';
            }
        }
    }
</script>

<style>
</style>