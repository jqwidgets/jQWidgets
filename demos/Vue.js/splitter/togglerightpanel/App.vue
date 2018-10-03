<template>
    <JqxSplitter 
        :width="850" :height="850"
        :panels="[{ size: 400, collapsible: false }]">
        <div class="splitter-panel">
            Panel 1
        </div>
        <div class="splitter-panel">
            Panel 2
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