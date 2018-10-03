<template>
    <JqxSortable>
        <div class="inner-div">1</div>
        <div class="inner-div">2</div>
        <div class="inner-div">3</div>
        <div class="inner-div">4</div>
        <div class="inner-div">5</div>
        <div class="inner-div">6</div>
        <div class="inner-div">7</div>
        <div class="inner-div">8</div>
        <div class="inner-div">9</div>
    </JqxSortable>
</template>

<script>
    import JqxSortable from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsortable.vue';

    export default {
        components: {
            JqxSortable
        }
    }
</script>

<style>
    .jqx-sortable {
        padding: 5px;
        float: left;
        width: 312px;
        border: lightblue solid 2px;
    }

    .inner-div {
        margin: 1px;
        display: inline-block;
        background-color: lightblue;
        border: DodgerBlue solid 1px;
        padding: 0;
        float: left;
        padding-left: 0;
        text-align: center;
        cursor: pointer;
        font-size: 5.2em;
        width: 100px;
        height: 100px;
    }
</style>