<template>
    <div>
        <JqxTree style="float: left;" ref="myTree" 
            :width="250" :height="350" :source="source">
        </JqxTree>

        <div style="font-family: Verdana; font-size: 12px; width: 400px; margin-left: 20px; float: left;">
            <ul>
                <li><b>Tab</b> - Like other widgets, the jqxTree widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the selection. A second tab will take the user out of the widget.</li>
                <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                <li><b>Up and Down</b> arrow keys - move between visible items.</li>
                <li><b>Left Arrow</b> key - on an expanded item, collapses the item.</li>
                <li><b>Left Arrow</b> key - on a collapsed or end item moves focus to the item's parent item.</li>
                <li><b>Right Arrow</b> key - on a collapsed item expands the item.</li>
                <li><b>Right Arrow</b> key - on an expanded item, moves to the first child item, or does nothing on an end item.</li>
                <li><b>Home</b> key - moves to the top item in the tree view.</li>
                <li><b>End</b> key - moves to the last item in the tree view.</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';

    export default {
        components: {
            JqxTree
        },
        data: function () {
            return {
                source:
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
                    { icon: '../../../images/favorites.png', label: 'Favorites' },
                ]
            }
        },
        mounted: function () {
            this.$refs.myTree.focus();
        }
    }
</script>