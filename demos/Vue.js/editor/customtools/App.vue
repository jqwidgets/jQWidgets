<template>
    <JqxEditor ref="myEditor"
               :width="getWidth" :height="400" :tools="tools" :createCommand="createCommand">
    </JqxEditor>
</template>

<script>
    import JqxEditor from "jqwidgets-scripts/jqwidgets-vue/vue_jqxeditor.vue";

    export default {
        components: {
            JqxEditor
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'datetime | print | clear | backcolor | font | bold italic underline'
            }
        },
        methods: {
            createCommand: function (name) {
                switch (name) {
                    case 'datetime':
                        return {
                            type: 'list',
                            tooltip: 'Insert Date/Time',
                            init: (widget) => {
                                widget.jqxDropDownList({ placeHolder: 'Insert Custom HTML', width: 170, source: ['Insert Time', 'Insert Date'], autoDropDownHeight: true });
                            },
                            refresh: (widget, style) => {
                                // do something here when the selection is changed.
                                widget.jqxDropDownList('clearSelection');
                            },
                            action: (widget, editor) => {
                                let widgetValue = widget.val();
                                let date = new Date();
                                // return object with command and value members.
                                return { command: 'inserthtml', value: widgetValue == 'Insert Time' ? date.getHours() + ':' + date.getMinutes() : date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() };
                            }
                        }
                    case 'print':
                        return {
                            type: 'button',
                            tooltip: 'Print',
                            init: (widget) => {
                                widget.jqxButton({ height: 25, width: 40 });
                                widget.html('<span style="line-height: 24px;">Print</span>');
                            },
                            refresh: (widget, style) => {
                                // do something here when the selection is changed.
                            },
                            action: (widget, editor) => {
                                // return nothing and perform a custom action.
                                this.$refs.myEditor.print();
                            }
                        }
                    case 'clear':
                        return {
                            type: 'button',
                            tooltip: 'Clear',
                            init: (widget) => {
                                widget.jqxButton({ height: 25, width: 40 });
                                widget.html('<span style="line-height: 24px;">Clear</span>');
                            },
                            refresh: (widget, style) => {
                                // do something here when the selection is changed.
                            },
                            action: (widget, editor) => {
                                // return nothing and perform a custom action.
                                this.$refs.myEditor.val('')
                            }
                        }
                    case 'backcolor':
                        return {
                            type: 'colorPicker',
                            tooltip: 'Background',
                            init: (widget) => {
                                widget.jqxDropDownButton({ width: 170 });
                                widget.jqxDropDownButton('setContent', '<span style="line-height: 24px;">Choose Background</span>');
                            },
                            refresh: (widget, style) => {
                                // do something here when the selection is changed.
                            },
                            action: (widget, editor) => {
                                // return nothing and perform a custom action.
                                let color = widget.val();
                                editor.css('background', color);
                            }
                        }
                }
            }
        }
    }
</script>

<style>
</style>