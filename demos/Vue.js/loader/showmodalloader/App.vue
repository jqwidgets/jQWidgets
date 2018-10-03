<template>
    <div>
        <JqxLoader ref="jqxLoader"
                   :isModal="true"
                   :imagePosition="'top'"
                   :width="100"
                   :height="60">
        </JqxLoader>
        <JqxButton @click="openLoaderClick($event)"
                   :width="150">
            Open Loader
        </JqxButton>
    </div>
</template>
<script>
    import JqxLoader from "jqwidgets-scripts/jqwidgets-vue/vue_jqxloader.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxLoader,
            JqxButton
        },
        methods: {
            openLoaderClick: function (event) {
                this.$refs.jqxLoader.open();
            }
        }
    }
</script>

<style>
</style>
