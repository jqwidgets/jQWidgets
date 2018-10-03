<template>
    <div>
        <div>The state is: {{ state }}</div><br />

        <JqxSwitchButton v-model="state" :width="80" :height="30" />
    </div>
</template>

<script>
    import JqxSwitchButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxswitchbutton.vue';

    export default {
        components: {
            JqxSwitchButton
        },
        data: function () {
            return {
                state: false
            }
        }
    }
</script>