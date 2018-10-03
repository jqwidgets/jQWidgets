<template>
    <JqxNotification :blink="true"
                     :autoOpen="true"
                     :autoClose="false"
                     :animationOpenDelay="800"
                     :template="'success'"
                     :opacity="0.9"
                     :position="'top-left'"
                     :width="'80%'">
        <span>This notification's width is 80%.</span>
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
