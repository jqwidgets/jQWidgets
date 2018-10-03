<template>
    <JqxTabs 
        @selected="selected($event)"
        :width="getWidth" :height="200">
        <ul>
            <li style="margin-left: 30px;">Node.js</li>
            <li>JavaServer Pages</li>
            <li>Active Server Pages</li>
        </ul>
        <div id="content1">
            <img src='../../../images/ajax-loader.gif' />
        </div>
        <div id="content2">
            <img src='../../../images/ajax-loader.gif' />
        </div>
        <div id="content3">
            <img src='../../../images/ajax-loader.gif' />
        </div>
    </JqxTabs>
</template>

<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxTabs
        },
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        mounted: function () {
            this.loadPage('pages/ajax1.htm', 1);
        },
        methods: {
            selected: function (event) {
                const pageIndex = event.args.item + 1;
                this.loadPage('pages/ajax' + pageIndex + '.htm', pageIndex);
            },
            loadPage: function (url, tabIndex) {
                axios.get(url)
                    .then(response => {
                        document.querySelector('#content' + tabIndex).innerHTML = response.data;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>