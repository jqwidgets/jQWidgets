<template>
    <div>
        <JqxDropDownButton ref="myDropDownButton" style="float: left"
                           :width="150" :height="25">
            <JqxTree ref="myTree"
                     @select="treeOnSelect($event)" :width="200">
                <ul>
                    <li item-selected="true">Home</li>
                    <li item-expanded="true">
                        Solutions
                        <ul>
                            <li>Education</li>
                            <li>Financial services</li>
                            <li>Government</li>
                            <li>Manufacturing</li>
                            <li>
                                Solutions
                                <ul>
                                    <li>eLearning</li>
                                    <li>Mobile</li>
                                    <li>RIA</li>
                                    <li>Training</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Products
                        <ul>
                            <li>PC products</li>
                            <li>Mobile products</li>
                            <li>All products</li>
                        </ul>
                    </li>
                </ul>
            </JqxTree>
        </JqxDropDownButton>

        <div style="float: left; margin-top: 5px; margin-left: 30px">
            <JqxCheckBox @change="checkBoxOnChange($event)">
                Open On Mouse Over
            </JqxCheckBox>
        </div>
    </div>
</template>

<script>
    import JqxDropDownButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue";
    import JqxTree from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxDropDownButton,
            JqxTree,
            JqxCheckBox
        },
        mounted: function () {
            this.$refs.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
        },
        methods: {
            treeOnSelect: function (event) {
                let item = this.$refs.myTree.getItem(event.args.element);
                let dropDownContent = `<div style="position: relative; margin-left: 3px; margin-top: 4px;">${item.label}</div>`;
                this.$refs.myDropDownButton.setContent(dropDownContent);
            },
            checkBoxOnChange: function (event) {
                this.$refs.myDropDownButton.autoOpen = event.args.checked;
            }
        }
    };
</script>

<style>
</style>