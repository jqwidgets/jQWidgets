<template>
    <JqxTree :width="'50%'" :height="'50%'">
        <ul>
            <li item-selected='true'>Home</li>
            <li item-expanded='true'>
                Solutions
                <ul>
                    <li>Education</li>
                    <li>Financial services</li>
                    <li>Government</li>
                    <li>Manufacturing</li>
                    <li>
                        Solutions
                        <ul>
                            <li>eLearning</li>
                            <li>Mobile</li>
                            <li>RIA</li>
                            <li>Training</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                Products
                <ul>
                    <li>PC products</li>
                    <li>Mobile products</li>
                    <li>All products</li>
                </ul>
            </li>
        </ul>
    </JqxTree>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';

    export default {
        components: {
            JqxTree
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>