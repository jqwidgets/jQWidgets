<template>
    <JqxNotification :rtl="true"
                     :position="'top-left'"
                     :opacity="0.9"
                     :animationOpenDelay="800"
                     :autoOpen="true"
                     :autoClose="false"
                     :template="'info'"
                     :width="'auto'">
        <span>אין לך הודעות</span>
    </JqxNotification>
</template>
<script>
    import JqxNotification from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnotification.vue";

    export default {
        components: {
            JqxNotification
        }
    }
</script>

<style>
    .jqx-notification {
        margin-top: 5em;
    }
</style>
