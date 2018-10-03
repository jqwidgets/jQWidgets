<template>
    <div>
        <div style="margin-bottom: 10px;" ref="verticalLabel">Vertical</div>
        <JqxScrollBar @valueChanged="onValueChangedVertical($event)"
            :width="18" :height="280" :min="0" :max="1000" :vertical="true"
        />

        <div style="margin: 10px 0;" ref="horizontalLabel">Horizontal</div>
        <JqxScrollBar @valueChanged="onValueChangedHorizontal($event)"
            :width="280" :height="18" :min="0" :max="1000"
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
            onValueChangedVertical: function (event) {
                this.$refs.verticalLabel.innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
            },
            onValueChangedHorizontal: function (event) {
                this.$refs.horizontalLabel.innerHTML = 'Horizontal (' + parseInt(event.currentValue) + ')';
            }
        }
    }
</script>