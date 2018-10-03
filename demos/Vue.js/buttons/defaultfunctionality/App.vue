<template>
    <div>
        <div style='margin-top: 20px'>
            <JqxButton ref="button" :width="120" :height="40" :textPosition="'center'" v-on:click="buttonClicked()">
                Button
            </JqxButton>
        </div>
        <div style='margin-top: 20px'>
            <JqxButton ref="submitButton" :width="120" :height="40" :textPosition="'center'" v-on:click="submitButtonClicked()">
                Submit
            </JqxButton>
        </div>
        <div style='margin-top: 20px'>
            <JqxButton ref="imageButton" :width="120" :height="40" :textPosition="'center'"
                       :imgSrc="'../images/facebook.png'" v-on:click="imageButtonClicked()">
            </JqxButton>
        </div>
        <div style='margin-top: 20px'>
            <JqxButton ref="myTextImageButton" :width="120" :height="40"
                       :textImageRelation="'imageBeforeText'" :textPosition="'left'" :imgSrc="'../images/twitter.png'"
                       v-on:click="textImageButtonClicked()">
                Button
            </JqxButton>
        </div>
        <div style='margin-top: 20px'>
            <JqxButton ref="myHTMLButton" :width="120" :height="40" :textPosition="'center'" v-on:click="hTMLButtonClicked()">
                <span style='font-weight: bold; '>HTML Button</span>
            </JqxButton>
        </div>
        <div style='margin-top: 20px'>
            <JqxButton ref="disabledButton" :width="120" :height="40" :textPosition="'center'" :disabled="true">
                Disabled
            </JqxButton>
        </div>
        <div style='margin-top:1em'>Events:</div>
        <div ref="events"></div>
    </div>
</template>

<script>

    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxButton
        },
        methods: {
            buttonClicked: function () {
                this.$refs.events.innerHTML = '<span>Button Clicked</span>';
            },
            submitButtonClicked: function () {
                this.$refs.events.innerHTML = '<span>Submit Button Clicked</span>';
            },
            imageButtonClicked: function () {
                this.$refs.events.innerHTML = '<span>Image Button Clicked</span>';
            },
            textImageButtonClicked: function () {
                this.$refs.events.innerHTML = '<span>Text/Image Button Clicked</span>';
                this.$refs.myTextImageButton.textImageRelation = "textBeforeImage";
                this.$refs.myTextImageButton.imgPosition = "left";
                this.$refs.myTextImageButton.textPosition = "center";
            },
            hTMLButtonClicked: function () {
                this.$refs.events.innerHTML = '<span>HTML Button Clicked</span>';
                this.$refs.myHTMLButton.textPosition = "top";
                this.$refs.myHTMLButton.value = "<span style='font-style: italic; position: relative; right: 8px'>Thanks for clicking me!</span>";
            }
        }
    }
</script>

<style>
</style>