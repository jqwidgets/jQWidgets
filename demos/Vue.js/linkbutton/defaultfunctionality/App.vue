<template>
    <JqxLinkButton :target="'_blank'" :href="'http://www.jqwidgets.com'" :width="120" :height="30">Link Button</JqxLinkButton>

    <!-- Both above and below ways of defining "target" and "href" works. -->
    <!--<JqxLinkButton target="_blank" href="http://www.jqwidgets.com">Link Button</JqxLinkButton>-->
</template>

<script>
    import JqxLinkButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlinkbutton.vue";

    export default {
        components: {
            JqxLinkButton
        }
    }
</script>