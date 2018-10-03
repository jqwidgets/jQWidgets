<template>
    <JqxDropDownButton ref="myDropDownButton" :width="150" :height="25">
        <JqxTree ref="myTree" @select="select($event)"
            :width="200" :height="220">
            <ul>
                <li item-selected='true'>Home</li>
                <li item-expanded='true'>
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
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';
    import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue';

    export default {
        components: {
            JqxTree,
            JqxDropDownButton
        },
        mounted: function () {
            this.$refs.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
        },
        methods: {
            select: function (event) {
                const item = this.$refs.myTree.getItem(event.args.element);
                const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
                this.$refs.myDropDownButton.setContent(dropDownContent);
            }
        }
    }
        
    
</script>