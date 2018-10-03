<template>
    <JqxPasswordInput :placeHolder="'Enter password'"
                      :width="'50%'"
                      :height="25">
    </JqxPasswordInput>
</template>

<script>
    import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpasswordinput.vue';

    export default {
        components: {
            JqxPasswordInput
        }
    }
</script>