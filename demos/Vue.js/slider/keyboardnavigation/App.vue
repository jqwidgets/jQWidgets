<template>
    <div>
        <JqxSlider ref="mySlider" :width="400" :mode="'fixed'" :min="0" :ticksFrequency="1" />

        <div class="legend">
            <ul>
                <li><b>Tab</b> - Like other widgets, the jqxSlider widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the slider's value. A second tab will take the user out of the widget.</li>
                <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                <li><b>Right Arrow</b> and <b>Up Arrow</b> - increase the value of the slider.</li>
                <li><b>Left Arrow</b> and <b>Down Arrow</b> - decrease the value of the slider.</li>
                <li><b>Home</b> - move to the minimum value of the slider.</li>
                <li><b>End</b> - move to the maximum value of the slider.</li>
            </ul>
        </div>
    </div>

</template>

<script>
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxSlider
        },
        mounted: function () {
            this.$refs.mySlider.focus();
        }
    }
</script>

<style>
    .jqx-slider {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .legend {
        font-family: Verdana;
        font-size: 12px;
        width: 400px;
        margin-left: 20px;
        float: left;
    }
</style>