<template>
    <JqxSplitter 
        :height="'100%'" :width="'100%'" 
        :panels="[{ size: '50%', min: '10%', collapsible: false }, { size: '50%', min: '5%' }]">
        <div>
            <JqxSplitter 
                :height="'100%'" :width="'100%'" 
                :panels="[{ size: 200}]">
                <div>
                    Nested 2.1
                </div>
                <div>
                    Nested 2.2
                </div>
            </JqxSplitter>
        </div>

        <div>
            <JqxSplitter 
                :height="'100%'" :width="'100%'"
                :panels="[{ size: '60%'}]"  :orientation="'horizontal'">
                <div>
                    Nested 1.1
                </div>
                <div>
                    Nested 1.2
                </div>
            </JqxSplitter>
        </div>
    </JqxSplitter>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';

    export default {
        components: {
            JqxSplitter
        }
    }
</script>

<style>
    body, html {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 3px;
        box-sizing: border-box;
        margin: 0;
    }
</style>