<template>
    <div>
        <JqxMenu ref="myMenu"
                 :autoSizeMainItems="true"
                 :width="'100%'"
                 :height="32">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li>
                    <a href="#Solutions">Solutions</a>
                    <ul style="width: 250px;">
                        <li><a href="#Education">Education</a></li>
                        <li><a href="#Financial">Financial services</a></li>
                        <li><a href="#Government">Government</a></li>
                        <li><a href="#Manufacturing">Manufacturing</a></li>
                        <li type="separator"></li>
                        <li>
                            Software Solutions
                            <ul style="width: 220px;">
                                <li><a href="#ConsumerPhoto">Consumer photo and video</a></li>
                                <li><a href="#Mobile">Mobile</a></li>
                                <li><a href="#RIA">Rich Internet applications</a></li>
                                <li><a href="#TechnicalCommunication">Technical communication</a></li>
                                <li><a href="#Training">Training and eLearning</a></li>
                                <li><a href="#WebConferencing">Web conferencing</a></li>
                            </ul>
                        </li>
                        <li><a href="#">All industries and solutions</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#Products">Products</a>
                    <ul>
                        <li><a href="#PCProducts">PC products</a></li>
                        <li><a href="#MobileProducts">Mobile products</a></li>
                        <li><a href="#AllProducts">All products</a></li>
                    </ul>
                </li>
            </ul>
        </JqxMenu>
        <br />
        <br />
        <JqxCheckBox ref="myCheckBox" @change="change($event)" :checked="true">Minimized</JqxCheckBox>
    </div>
</template>
<script>
    import JqxMenu from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmenu.vue"
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue"

    export default {
        components: {
            JqxMenu,
            JqxCheckBox
        },
        mounted: function () {
            this.$refs.myMenu.minimize();
        },
        methods: {
            change: function(event) {
                if (this.$refs.myCheckBox.val()) {
                    this.$refs.myMenu.minimize();
                }
                else {
                    this.$refs.myMenu.restore();
                }
            }
        }
    }
</script>

<style>
</style>
