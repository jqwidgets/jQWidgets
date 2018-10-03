<template>
    <div>
        <JqxTree ref="myTree" style="float: left"
                 :width="300" :height="450">
            <ul>
                <li id="home">Home</li>
                <li id="solutions">
                    Solutions
                    <ul>
                        <li>Education</li>
                        <li>Financial services</li>
                        <li>Government</li>
                        <li>Manufacturing</li>
                        <li>
                            Solutions
                            <ul>
                                <li>Consumer photo and video</li>
                                <li>Mobile</li>
                                <li>Rich Internet applications</li>
                                <li>Technical communication</li>
                                <li>Training and eLearning</li>
                                <li>Web conferencing</li>
                            </ul>
                        </li>
                        <li>All industries and solutions</li>
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
                <li>
                    Support
                    <ul>
                        <li>Support home</li>
                        <li>Customer Service</li>
                        <li>Knowledge base</li>
                        <li>Books</li>
                        <li>Training and certification</li>
                        <li>Support programs</li>
                        <li>Forums</li>
                        <li>Documentation</li>
                        <li>Updates</li>
                    </ul>
                </li>
                <li>
                    Communities
                    <ul>
                        <li>Designers</li>
                        <li>Developers</li>
                        <li>Educators and students</li>
                        <li>Partners</li>
                        <li>
                            By resource
                            <ul>
                                <li>Labs</li>
                                <li>TV</li>
                                <li>Forums</li>
                                <li>Exchange</li>
                                <li>Blogs</li>
                                <li>Experience Design</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Company
                    <ul>
                        <li>About Us</li>
                        <li>Press</li>
                        <li>Investor Relations</li>
                        <li>Corporate Affairs</li>
                        <li>Careers</li>
                        <li>Showcase</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                        <li>Become an affiliate</li>
                    </ul>
                </li>
            </ul>
        </JqxTree>

        <div style="margin-left: 60px; float: left">
            <div style="margin-top: 10px">
                <JqxButton @click="AddOnClick()" :width="125" :height="25">Add</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="AddAfterOnClick()" :width="125" :height="25">Add After</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="AddBeforeOnClick()" :width="125" :height="25">Add Before</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="UpdateOnClick()" :width="125" :height="25">Update</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="RemoveOnClick()" :width="125" :height="25">Remove</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="DisableOnClick()" :width="125" :height="25">Disable</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="ExpandOnClick()" :width="125" :height="25">Expand</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="CollapseOnClick()" :width="125" :height="25">Collapse</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="ExpandAllOnClick()" :width="125" :height="25">Expand All</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="CollapseAllOnClick()" :width="125" :height="25">Collapse All</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="EnableAllOnClick()" :width="125" :height="25">Enable All</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="NextOnClick()" :width="125" :height="25">Next Item</JqxButton>
            </div>
            <div style="margin-top: 10px">
                <JqxButton @click="PreviousOnClick()" :width="125" :height="25">Previous Item</JqxButton>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTree,
            JqxButton
        },
        mounted: function () {
            this.$refs.myTree.selectItem(document.querySelector('#home'));
            this.$refs.myTree.expandItem(document.querySelector('#solutions'));
        },
        methods: {
            AddOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.addTo({ label: 'Item' }, selectedItem.element);
                    this.$refs.myTree.render();
                }
                else {
                    this.$refs.myTree.addTo({ label: 'Item' }, null);
                    this.$refs.myTree.render();
                }
            },
            AddAfterOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.addAfter({ label: 'Item' }, selectedItem.element);
                    this.$refs.myTree.render();
                }
            },
            AddBeforeOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.addBefore({ label: 'Item' }, selectedItem.element);
                    this.$refs.myTree.render();
                }
            },
            UpdateOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.updateItem({ label: 'Item' }, selectedItem.element);
                    this.$refs.myTree.render();
                }
            },
            RemoveOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.removeItem(selectedItem.element);
                    this.$refs.myTree.render();
                }
            },
            DisableOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.disableItem(selectedItem.element);
                }
            },
            ExpandOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.expandItem(selectedItem.element);
                }
            },
            CollapseOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.$refs.myTree.collapseItem(selectedItem.element);
                }
            },
            ExpandAllOnClick: function () {
                this.$refs.myTree.expandAll();
            },
            CollapseAllOnClick: function () {
                this.$refs.myTree.collapseAll();
            },
            EnableAllOnClick: function () {
                this.$refs.myTree.enableAll();
            },
            NextOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    const nextItem = selectedItem.element.nextElementSibling;
                    if (nextItem != null) {
                        this.$refs.myTree.selectItem(nextItem);
                        this.$refs.myTree.ensureVisible(nextItem);
                    }
                }
            },
            PreviousOnClick: function () {
                const selectedItem = this.$refs.myTree.getSelectedItem();
                if (selectedItem != null) {
                    const prevItem = selectedItem.element.previousElementSibling;
                    if (prevItem != null) {
                        this.$refs.myTree.selectItem(prevItem);
                        this.$refs.myTree.ensureVisible(prevItem);
                    }
                }
            }
        }
    }
</script>