<template>
    <div>
        <JqxScrollView ref="myScrollView" :width="600" :height="450" :buttonsOffset="[0, 0]">
            <div><div class="photo" style="background-image: url(../../../images/imageNature1.jpg)"></div></div>
            <div><div class="photo" style="background-image: url(../../../images/imageNature2.jpg)"></div></div>
            <div><div class="photo" style="background-image: url(../../../images/imageNature3.jpg)"></div></div>
            <div><div class="photo" style="background-image: url(../../../images/imageNature4.jpg)"></div></div>
            <div><div class="photo" style="background-image: url(../../../images/imageNature5.jpg)"></div></div>
        </JqxScrollView>

        <div style="margin-top: 2em"></div>

        <JqxButton @click="onStartClicked()" :width="120">
            Start SlideShow
        </JqxButton>

        <JqxButton @click="onStopClicked()" :width="120">
            Stop SlideShow
        </JqxButton>
    </div>
</template>

<script>
    import JqxScrollView from "jqwidgets-scripts/jqwidgets-vue/vue_jqxscrollview.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxScrollView,
            JqxButton
        },
        methods: {
            onStartClicked : function (event) {
                this.$refs.myScrollView.slideShow = true;
            },
            onStopClicked: function (event) {
                this.$refs.myScrollView.slideShow = false;
            }
        }
    }
</script>

<style>
    .photo {
        width: 600px;
        height: 450px;
        background-color: #000;
        background-position: center;
        background-repeat: no-repeat;
    }

    .jqx-button {
        display: inline-block;
        margin-right: 10px;
    }
</style>