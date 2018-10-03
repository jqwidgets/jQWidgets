<template>
    <div>
        <span>Checkbox state is: </span>
        <b v-if="state !== null">{{ state }}</b>
        <b v-else>null</b>

        <br /><br />

        <JqxCheckBox v-model="state" :width="120" :height="25" :checked="true" :hasThreeStates="true" />
    </div>
</template>

<script>
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';

    export default {
        components: {
            JqxCheckBox
        },
        data: function () {
            return {
                state: true
            }
        }
    }
</script>