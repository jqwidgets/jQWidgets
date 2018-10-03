<template>
    <div>
        <div style="margin-bottom: 10px;" ref="horizontalLabel">Horizontal</div>
        <JqxScrollBar @valueChanged="valueChanged($event)"
            :width="280" :height="18" :min="0" :max="1000" :rtl="true"
        />
    </div>
</template>

<script>
    import JqxScrollBar from "jqwidgets-scripts/jqwidgets-vue/vue_jqxscrollbar.vue";

    export default {
        components: {
            JqxScrollBar
        },
        methods: {
            valueChanged: function (event) {
                this.$refs.horizontalLabel.innerHTML = 'Horizontal (' + parseInt(event.currentValue) + ')';
            }
        }
    }
</script>