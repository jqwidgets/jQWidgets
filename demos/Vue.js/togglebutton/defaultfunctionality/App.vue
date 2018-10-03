<template>
    <div class="container">
        <JqxToggleButton ref="myToggleButton"
            @click="click()"
            :width="200" :toggled="true">
            Toggled On
        </JqxToggleButton>

        <JqxToggleButton 
            :width="200" :disabled="true">
            Disabled
        </JqxToggleButton>
    </div>
</template>

<script>
    import JqxToggleButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtogglebutton.vue';

    export default {
        components: {
            JqxToggleButton
        },
        methods: {
            click: function () {
                const button = this.$refs.myToggleButton;

                button.toggled ? button.val('Toggled On') : button.val('Toggled Off');       
            }
        }
    }
</script>

<style>
    .container {
        margin-left: 25px;
    }
    .jqx-button {
        display: inline-block;
        user-select: none;
    }
    .jqx-button:last-of-type {
        margin-left: 20px;
    }
</style>