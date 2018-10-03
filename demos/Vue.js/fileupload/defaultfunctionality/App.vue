<template>
    <JqxFileUpload :width="300" :uploadUrl="'imageUpload.php'" :fileInputName="'fileToUpload'">
    </JqxFileUpload>
</template>

<script>
    import JqxFileUpload from "jqwidgets-scripts/jqwidgets-vue/vue_jqxfileupload.vue";

    export default {
        components: {
            JqxFileUpload
        }
    }
</script>

<style>
</style>