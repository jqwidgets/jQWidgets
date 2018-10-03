<template>
    <div>

        <JqxSortable ref="mySortable1" :autoCreate="false"></JqxSortable>
       
        <JqxSortable ref="mySortable2" :autoCreate="false"></JqxSortable>

    </div>
</template>

<script>
    import JqxSortable from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsortable.vue';

    export default {
        components: {
            JqxSortable
        },
        data: function () {
            return {
                options: { connectWith: '.sortable', opacity: 0.5 },
                firstNames: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'],
                lastNames: ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'],
                titles: ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative']
            }
        },
        mounted: function () {
            this.loadInfo();

            this.$refs.mySortable1.createComponent(this.options);
            this.$refs.mySortable2.createComponent(this.options);
        },
        methods: {
            loadInfo: function () {
                let sortableList1 = '';
                let sortableList2 = '';

                const firstNamesHalf = Math.floor(this.firstNames.length / 2);

                for (let i = 0; i < this.firstNames.length; i++) {
                    const imgurl = '../../../images/' + this.firstNames[i].toLowerCase() + '.png';
                    const img = '<img height="50" width="40" src="' + imgurl + '"/>';
                    const element = '<div><table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + this.firstNames[i] + ' ' + this.lastNames[i] + '</td></tr><tr><td>' + this.titles[i] + '</td></tr></table></div>';


                    if (i < firstNamesHalf) {
                        sortableList1 = sortableList1 + element;
                    } else {
                        sortableList2 = sortableList2 + element;
                    }
                }

                const mySortable1 = this.$refs.mySortable1.$el;
                const mySortable2 = this.$refs.mySortable2.$el;

                mySortable1.classList.add('sortable');
                mySortable2.classList.add('sortable');

                mySortable1.innerHTML = sortableList1;
                mySortable2.innerHTML = sortableList2;

            }
        }
    }
</script>

<style>
    .jqx-sortable {
        margin: 2px;
        padding: 5px;
        float: left;
        width: 200px;
        border: lightblue solid 1px;
        margin-right: 30px;
    }

    .jqx-sortable div {
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        background-color: white;
        color: black;
        border: 1px solid transparent;
    }

    .jqx-sortable div:hover {
        border: 1px solid #356AA0;
    }
</style>