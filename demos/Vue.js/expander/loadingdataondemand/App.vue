<template>
    <JqxExpander ref="myExpander" :width="350" :height="350">
        <div>
            Loading Header...
        </div>
        <div>
            Loading Content...
        </div>
    </JqxExpander>
</template>

<script>
    import JqxExpander from "jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue";

    export default {
        components: {
            JqxExpander
        },
        mounted: function () {
            fetch('jqxexpanderxmldata.xml')
                .then(response => response.text().then(data => this.populateExpader(data)));
        },
        methods: {
            populateExpader: function(data) {
                const content = document.createElement('div');
                content.innerHTML = data;

                let LIArray = content.getElementsByTagName('li');
                const container = document.createElement('div');
                const ul = document.createElement('ul');

                for (let i = 0; i < LIArray.length; i++) {
                    const li = document.createElement('li');
                    li.innerText = LIArray[i].innerHTML;
                    ul.appendChild(li)
                }

                container.appendChild(ul);

                this.$refs.myExpander.setContent(container);
                this.$refs.myExpander.setHeaderContent(content.getElementsByTagName('header')[0].innerHTML);
            }
        }
    }
</script>

<style>
</style>