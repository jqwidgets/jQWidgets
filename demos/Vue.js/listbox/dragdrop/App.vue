<template>
    <div>
        <JqxListBox style="float: left;" ref="listBoxA"
                    @dragStart="dragStartA($event)"
                    @dragEnd="dragEndA($event)"
                    :allowDrop="true"
                    :allowDrag="true"
                    :source="source1"
                    :dragStart="dragStart"
                    :renderer="renderer1"
                    :width="200"
                    :height="250">
        </JqxListBox>

        <JqxListBox style="margin-left: 20px; float: left;" ref="listBoxB"
                    @dragStart="dragStartB($event)"
                    @dragEnd="dragEndB($event)"
                    :allowDrop="true"
                    :allowDrag="true"
                    :source="source2"
                    :dragEnd="dragEnd"
                    :renderer="renderer2"
                    :width="200"
                    :height="250">
        </JqxListBox>
        <div style="width: 200px; height: 200px; float: left; margin-left: 20px;">
            <JqxTextArea ref="myTextArea" :width="200" :height="100"></JqxTextArea>
        </div>
        <div style="font-size: 13px; font-family: Verdana; padding-top: 20px; clear: both;">
            <b>Events Log:</b>
            <div ref="dragStartLog">
            </div>
            <div ref="dragEndLog">
            </div>
            <br />
            <b>Note:</b>
            <br />
            Dragging of "Breve" is disabled.
            <br />
            Dropping of "Frappuccino" is disabled.
        </div>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";
    import JqxTextArea from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtextarea.vue";

    export default {
        components: {
            JqxListBox,
            JqxTextArea
        },
        data: function () {
            return {
                source1: [
                    'Affogato',
                    'Americano',
                    'Bicerin',
                    'Breve',
                    'Café Bombón',
                    'Café au lait',
                    'Caffé Corretto',
                    'Café Crema',
                    'Caffé Latte',
                    'Caffé macchiato',
                    'Café mélange',
                    'Coffee milk',
                    'Cafe mocha'
                ],
                source2: [
                    'Cappuccino',
                    'Carajillo',
                    'Cortado',
                    'Cuban espresso',
                    'Espresso',
                    'Eiskaffee',
                    'The Flat White',
                    'Frappuccino',
                    'Galao',
                    'Greek frappé coffee',
                    'Iced Coffee﻿',
                    'Indian filter coffee',
                    'Instant coffee',
                    'Irish coffee',
                    'Liqueur coffee'
                ]
            }
        },
        methods: {

            onDragStart: function(event) {
                this.$refs.dragStartLog.innerHTML = 'Drag Start: ' + event.args.label;
                this.$refs.dragEndLog.innerHTML = '';
            },
            onDragEnd: function (event) {
                this.$refs.dragEndLog.innerHTML = 'Drag End';
                if (event.args.label) {
                    let ev = event.args.originalEvent;
                    let x = ev.pageX;
                    let y = ev.pageY;

                    if (event.args.originalEvent && event.args.originalEvent.originalEvent && event.args.originalEvent.originalEvent.touches) {
                        let touch = event.args.originalEvent.originalEvent.changedTouches[0];
                        x = touch.pageX;
                        y = touch.pageY;
                    }
                    let textareaElement = this.$refs.myTextArea.$el.parentElement;
                    let width = textareaElement.offsetWidth;
                    let height = textareaElement.offsetHeight;
                    let right = parseInt(textareaElement.offsetLeft) + width;
                    let bottom = parseInt(textareaElement.offsetTop) + height;

                    if (x >= parseInt(textareaElement.offsetLeft) && x <= right) {
                        if (y >= parseInt(textareaElement.offsetTop) && y <= bottom) {
                            this.$refs.myTextArea.val(event.args.label);
                        }
                    }
                }
            },
            dragStart: function (item) {
                if (item.label == 'Breve') {
                    return false;
                }
            },
            dragEnd: function(dragItem, dropItem)  {
                if (dragItem.label == 'Frappuccino')
                    return false;
            },
            renderer1: function (index, label, value) {
                if (label == 'Breve') {
                    return '<span style="color: red;">' + label + '</span>';
                }

                return label;
            },
            renderer2: function (index, label, value) {
                if (label == 'Frappuccino') {
                    return '<span style="color: red">' + label + '</span>';
                }

                return label;
            },
            // Events
            dragStartA: function(event) {
                this.onDragStart(event);
            },
            dragStartB: function (event) {
                this.onDragStart(event);
            },
            dragEndA: function (event) {
                this.onDragEnd(event);
            },
            dragEndB: function (event) {
                this.onDragEnd(event);
            }
        }
    }
</script>

<style>
</style>
