<template>
    <div>
        <JqxRepeatButton style="margin-left: 25px"
                         @click="repeatOnClick()"
                         :width="200" :delay="10">
            Click Me!
        </JqxRepeatButton>

        <JqxProgressBar ref="myProgressBar" style="margin-top: 10px"
                        :width="250" :height="25" :max="30">
        </JqxProgressBar>
    </div>
</template>

<script>
    import JqxRepeatButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrepeatbutton.vue';
    import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxprogressbar.vue';

    export default {
        components: {
            JqxRepeatButton,
            JqxProgressBar
        },     
        methods: {
            repeatOnClick() {
                let currentValue = this.$refs.myProgressBar.value;
                currentValue += 1;
                this.$refs.myProgressBar.setOptions({ animationDuration: 0, value: currentValue });
            }
        }
    }
</script>

<style>
</style>