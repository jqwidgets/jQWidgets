<template>
    <div>
        <JqxExpander 
            :width="300" :height="370" :showArrow="false" :toggleMode="'none'">
            <div>Folders</div>
            <div style="overflow: hidden;">
                <JqxTree ref="myTree"
                    :width="'100%'" :height="'100%'" :source="treeSource">
                </JqxTree>
            </div>
        </JqxExpander>
    </div>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';
    import JqxExpander from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue';

    export default {
        components: {
            JqxTree,
            JqxExpander
        },
        data: function () {
            return {
                treeSource:
                [
                    {
                        icon: '../../../images/mailIcon.png', label: 'Mail', expanded: true,
                        items:
                        [
                            { icon: '../../../images/calendarIcon.png', label: 'Calendar' },
                            { icon: '../../../images/contactsIcon.png', label: 'Contacts', selected: true }
                        ]
                    },
                    {
                        icon: '../../../images/folder.png', label: 'Inbox', expanded: true,
                        items:
                        [
                            { icon: '../../../images/folder.png', label: 'Admin' },
                            { icon: '../../../images/folder.png', label: 'Corporate' },
                            { icon: '../../../images/folder.png', label: 'Finance' },
                            { icon: '../../../images/folder.png', label: 'Other' },
                        ]
                    },
                    { icon: '../../../images/recycle.png', label: 'Deleted Items' },
                    { icon: '../../../images/notesIcon.png', label: 'Notes' },
                    { icon: '../../../images/settings.png', label: 'Settings', iconsize: 14 },
                    { icon: '../../../images/favorites.png', label: 'Favorites' }
                ]
            }
        },
        mounted: function () {
            this.$refs.myTree.selectItem(null);
        }
    }
</script>