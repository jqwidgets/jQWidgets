<template>
    <div id="container">
        <JqxButton @click="click()"
            :width="100" :height="25">
            Toggle tooltip
        </JqxButton>

        <JqxTooltip ref="myTooltip"
            :autoHide="false" :position="'bottom'" :name="'movieTooltip'"
            :closeOnClick="false" :trigger="'none'" :content="'The Amazing Spider-Man'">
            <img src='../../../images/The_Amazng_Spider_Man.jpeg' />
        </JqxTooltip>
    </div>
</template>

<script>
    import JqxTooltip from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtooltip.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTooltip,
            JqxButton
        },
        data: function () {
            return {
                toggle: false
            }
        },
        methods: {
            click: function () {
                if (!this.toggle) {
                    this.$refs.myTooltip.open();
                    this.toggle = true;
                } else {
                    this.$refs.myTooltip.close();
                    this.toggle = false;
                }
            }
        }
    }
</script>

<style>
    #container {
        text-align: center;
    }
    .jqx-button {
        display: inline-block;
        margin-bottom: 10px;
    }
    .jqx-tooltip {
        left: 50%;
        transform: translateX(-50%);
    }
</style>