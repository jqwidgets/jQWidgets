<template>
    <div style="font-family: Verdana Arial; font-size: 12px; width: 400px;">
        <div style="float: left; width: 400px;">
            <h3 style="margin-left: 15px;">Categories</h3>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                Entertainment
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25" :checked="true">
                <span>Computers</span>
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                <span>Sports</span>
            </JqxCheckBox>
        </div>
        <div style="float: left; width: 400px; margin-top: 10px;">
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                Health
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                <span>Finance</span>
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                <span>Travel</span>
            </JqxCheckBox>
        </div>
        <div style="float: left; width: 400px; margin-top: 10px;">
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                Music
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                <span>Technology</span>
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25">
                <span>Publishing</span>
            </JqxCheckBox>
        </div>
        <br />
        <div style="float: left; width: 400px; margin-top: 10px;">
            <h3 style="margin-left: 15px;">States</h3>
            <JqxCheckBox @change="checkBox10OnChange($event)" style="margin-left: 10px; float: left;"
                         :width="120" :height="25" :checked="true">
                <span ref="span10">Checked</span>
            </JqxCheckBox>
            <JqxCheckBox @change="checkBox11OnChange($event)" style="margin-left: 10px; float: left;"
                         :width="120" :height="25" :checked="false">
                <span ref="span11">Unchecked</span>
            </JqxCheckBox>
        </div>
        <div style="float: left; width: 400px; margin-top: 10px;">
            <JqxCheckBox @change="checkBox12OnChange($event)" style="margin-left: 10px; float: left;"
                         :width="120" :height="25" :hasThreeStates="true" :checked="null">
                <span ref="span12">Indeterminate</span>
            </JqxCheckBox>
            <JqxCheckBox style="margin-left: 10px; float: left;"
                         :width="120" :height="25" :disabled="true">
                <span>Disabled</span>
            </JqxCheckBox>
        </div>
    </div>

</template>

<script>
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxCheckBox
        },
        methods: {
            checkBox10OnChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.span10.innerHTML = 'Checked';
                }
                else {
                    this.$refs.span10.innerHTML = 'Unchecked';
                }
            },
            checkBox11OnChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.span11.innerHTML = 'Checked';
                }
                else {
                    this.$refs.span11.innerHTML = 'Unchecked';
                }
            },
            checkBox12OnChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.span12.innerHTML = 'Checked';
                }
                else if (checked === false) {
                    this.$refs.span12.innerHTML = 'Unchecked';
                }
                else {
                    this.$refs.span12.innerHTML = 'Indeterminate';
                }
            }
        }
    }
</script>

<style>
</style>