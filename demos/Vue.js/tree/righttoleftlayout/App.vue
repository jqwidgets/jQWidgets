<template>
    <JqxTree
        :width="250" :height="350" :source="source" :rtl="true">
    </JqxTree>
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
        }
    }
</script>