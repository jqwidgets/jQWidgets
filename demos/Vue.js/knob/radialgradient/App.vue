<template>
    <div>
        <JqxKnob ref="myKnob" style="position: relative" @change="myKnobOnChange($event)"
                 :width="400" :height="400"
                 :value="10" :min="0" :max="100" :startAngle="90"
                 :endAngle="450" :rotation="'clockwise'" :snapToStep="true"
                 :styleProperty="{ fill: 'transparent' }" :progressBar="progressBar"
                 :pointer="pointer" :pointerGrabAction="'progressBar'">
        </JqxKnob>

        <JqxNumberInput ref="myNumberInput" @change="myNumberInputOnChange($event)"
                        :width="180" :height="75" :decimal="0" :min="0" :max="100"
                        :decimalDigits="1" :textAlign="'center'" :symbol="'%'"
                        :symbolPosition="'right'" :inputMode="'simple'" :value="10">
        </JqxNumberInput>
    </div>
</template>
<script>
    import JqxKnob from "jqwidgets-scripts/jqwidgets-vue/vue_jqxknob.vue";
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";

    export default {
        components: {
            JqxKnob,
            JqxNumberInput
        },
        data: function () {
            return {
                progressBar: {
                    style: { fill: { color: '#00a4e1', gradientType: 'radial', gradientStops: [[0, 0.5], [100, 1]] } },
                    size: '50%',
                    offset: '50%',
                    background: { fill: { color: '#FFFFFF', gradientType: 'linear', gradientStops: [[0, 0.5], [100, 1]] } }
                },
                pointer: {
                    type: 'line',
                    style: { fill: '#00a4e1' },
                    size: '50%',
                    offset: '50%',
                    thickness: 0
                }
            }
        },
        methods: {
            myKnobOnChange: function (event) {
                this.$refs.myNumberInput.val(event.args.value);
            },
            myNumberInputOnChange: function (event) {
                this.$refs.myKnob.val(event.args.value);
            }
        }
    }
</script>

<style>
    .jqx-numberinput {
        left: 120px;
        top: 185px;
        position: absolute;
        background: transparent !important;
        border: none !important;
    }

        .jqx-numberinput > input {
            font-size: 45px !important;
        }
</style>
